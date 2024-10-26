import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { CircularProgress, Alert } from "@mui/material";

const uploadFile = async (file: File) => {
  const accessToken = import.meta.env.VITE_Access_Token;
  const bucketName = import.meta.env.VITE_Bucket_Name;

  const response = await fetch(
    `https://storage.googleapis.com/upload/storage/v1/b/${bucketName}/o?uploadType=media&name=${encodeURIComponent(
      file.name
    )}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/octet-stream",
      },
      body: file,
    }
  );

  if (response.ok) {
    console.log(`File ${file.name} uploaded successfully`);
    return true;
  } else {
    console.error(`File upload failed for ${file.name}:`, response.statusText);
    return false;
  }
};

export const UploadFilePage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files)); // Convert FileList to array
    setUploadSuccess(false);
    setUploadError("");
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setUploadError("Please select at least one file to upload.");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file, index) => {
      formData.append(`files[${index}]`, file);
    });

    setUploading(true);
    setUploadError("");
    setUploadSuccess(false);

    try {
      const uploadPromises = selectedFiles.map((file) => uploadFile(file));
      const results = await Promise.all(uploadPromises);

      if (results.every((result) => result)) {
        setUploadSuccess(true);
      } else {
        setUploadError("Some files failed to upload.");
      }
    } catch (error) {
      setUploadError("Failed to upload files.");
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Stack spacing={2} width="100%" maxWidth={400} margin="auto">
      <div className="text-red-600">Hello world</div>
      <TextField
        type="file"
        variant="outlined"
        onChange={handleFileChange}
        InputLabelProps={{ shrink: true }}
        inputProps={{ multiple: true }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={uploading || selectedFiles.length === 0}
        endIcon={uploading && <CircularProgress size={20} />}
      >
        {uploading ? "Uploading..." : "Upload Files"}
      </Button>
      {uploadError && <Alert severity="error">{uploadError}</Alert>}
      {uploadSuccess && (
        <Alert severity="success">Files uploaded successfully!</Alert>
      )}
    </Stack>
  );
};
