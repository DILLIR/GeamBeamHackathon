import requests
import pandas as pd
import os
import re
import hashlib
from collections import defaultdict

# Define the URL and headers
url = 'https://connection.europe-west3.gcp.keboola.com/v2/storage/files'
headers = {
    'X-StorageApi-Token': '831-100983-rbUBoeahmrKdhT9ALKdF4i14RLlXANpqk3zWZYiU'
}
params = {
    'limit': '2000',
    'q': 'hackathon'  # Removed 'limit' to get all matching file IDs
}

# Ensure the 'in/files' directory exists
os.makedirs('in/files', exist_ok=True)

# Request the file data
response = requests.get(url, headers=headers, params=params)

# Check if the request was successful
if response.ok:
    # Extract file information and filter for unique PDF files (excluding manifests)
    files_data = response.json()
    unique_pdfs = {
        file['id']: file for file in files_data
        if file['name'].endswith('.pdf') and 'manifest' not in file['name'].lower()
    }

    # Print the total number of filtered files
    print(f"Total unique PDF files (excluding manifests): {len(unique_pdfs)}")

    # Create a DataFrame for filtered unique PDF files
    df = pd.DataFrame([{
        'id': file['id'],
        'name': file['name'],
        'url': file['url']
    } for file in unique_pdfs.values()])

    # Track the count of successfully downloaded files
    downloaded_count = 0
    total_files = len(df)

    # Download each unique PDF file to 'in/files' folder
    for index, row in df.iterrows():
        file_url = row['url']
        file_name = row['name']
        file_path = os.path.join('in/files', file_name)

        # Download the file
        file_response = requests.get(file_url)
        if file_response.ok:
            # Save the file to the specified folder
            with open(file_path, 'wb') as file:
                file.write(file_response.content)
            downloaded_count += 1

            # Display progress every 50 files
            if downloaded_count % 50 == 0 or downloaded_count == total_files:
                print(f"{downloaded_count}/{total_files} files downloaded")
        else:
            print(f"Failed to download {file_name}: {file_response.status_code}")

    # Remove duplicate files that may have names like file(1).pdf, file(2).pdf, etc.
    file_names = os.listdir('in/files')
    unique_files = set()

    for file_name in file_names:
        # Use regex to check for files with duplicate naming patterns like file(1).pdf
        base_name = re.sub(r'\(\d+\)', '', file_name)  # Removes "(number)" pattern
        if base_name not in unique_files:
            unique_files.add(base_name)
        else:
            # Remove duplicate file
            os.remove(os.path.join('in/files', file_name))
            print(f"Removed duplicate: {file_name}")

    # Final count of files in the 'in/files' folder
    final_file_count = len(os.listdir('in/files'))
    print(f"Total files in folder after duplicate removal by name: {final_file_count}")

else:
    print(f"Error: {response.status_code} - {response.text}")


# Function to get the file hash
def get_file_hash(file_path, chunk_size=4096):
    """Calculate the hash of a file."""
    hash_algo = hashlib.md5()  # You can use other hash algorithms like sha1, sha256
    with open(file_path, "rb") as f:
        while chunk := f.read(chunk_size):
            hash_algo.update(chunk)
    return hash_algo.hexdigest()


# Function to count and remove duplicate files by hash
def count_and_remove_duplicates(directory):
    file_count = 0
    hash_dict = defaultdict(list)

    for root, _, files in os.walk(directory):
        for file_name in files:
            file_path = os.path.join(root, file_name)
            file_count += 1
            file_hash = get_file_hash(file_path)
            hash_dict[file_hash].append(file_path)

    duplicate_files = {k: v for k, v in hash_dict.items() if len(v) > 1}
    duplicate_count = sum(len(v) - 1 for v in duplicate_files.values())

    print(f"Total files: {file_count}")
    print(f"Total duplicates: {duplicate_count}")

    # Remove duplicates
    if duplicate_files:
        print("\nRemoving duplicate files...")
        for file_hash, file_paths in duplicate_files.items():
            # Keep the first file and delete the rest
            for path in file_paths[1:]:
                os.remove(path)
                print(f"Deleted: {path}")
        print("Duplicate files removed.")
    else:
        print("No duplicate files found.")


# Set the directory to scan and remove hash-based duplicates
directory = "in/files/"
count_and_remove_duplicates(directory)
