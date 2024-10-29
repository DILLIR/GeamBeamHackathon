import os
from pathlib import Path
import google.generativeai as genai

from src.chroma_search_engine import upload_all_data, get_document_file_path, get_document_content

genai.configure(api_key=os.environ["API_KEY"])


# def main():
#     config = load_config()
#     if not config["dataset_uploaded"]:
#         upload_all_data("hackathon-test-collection", Path("small_dataset"))
#     config["dataset_uploaded"] = True
#     save_config(config)

#     print(get_document_file_path("hackathon-test-collection", "Vitamin B-6"))


# def main1():
    # upload_all_data("hackathon-test-collection", Path("small_dataset"))
#     print(get_document_file_path("hackathon-test-collection", """Corneal stromal wound healing involves a complex interplay of keratocyte proliferation, inflammation, and tissue remodeling, with L-carnitine acting as a natural antioxidant that may help reduce stromal fibrosis, although its mechanisms remain unclear. This study explored whether L-carnitine inhibits the fibrotic response by blocking TRPV1 activation in human corneal keratocytes, revealing that L-carnitine significantly reduces calcium transients, myofibroblast transdifferentiation, and cell migration triggered by various stressors. Ultimately, the findings suggest that L-carnitine may help mitigate stromal scarring by targeting TRPV1 activity linked to myofibroblast differentiation in keratocytes.""", 2))
#     print(timeit.timeit(lambda: get_document_file_path("hackathon-test-collection", "Vitamin B-6", 2), number=100))


collection = 'hackathon-test-collection'

# def u


def main():
    upload_all_data("hackathon-test-collection", Path("small_dataset"))
    print(get_ai_response([], 'hello, how can I gain weight?', '19', 'male', 'gain weight', 'medium', '65', 'No'))




def test_topic_query_gen():

    print(get_ai_response([], 'hello, how can I gain weight?', '19', 'male', 'gain weight', 'medium', '65', 'No'))

    # generate_topic_query(context_data)



if __name__ == "__main__":
    test_topic_query_gen()
