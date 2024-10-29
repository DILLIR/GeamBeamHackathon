#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <stdexcept>
#include <string>
#include <vector>

std::vector<std::string> splitTextIntoChunks(const std::string& text, int phrases, int overlap = 1) {
    if (phrases < 1) {
        throw std::invalid_argument("phrases must be at least 1.");
    }
    if (overlap < 0) {
        throw std::invalid_argument("overlap must be 0 or greater.");
    }

    std::vector<std::string> chunks;
    std::vector<size_t> sentence_boundaries;
    sentence_boundaries.reserve(text.size() / 50); // Efficiency estimate

    for (size_t i = 0; i < text.size(); ++i) {
        char c = text[i];
        if ((c == '.' || c == '!' || c == '?') && (i + 1 == text.size() || text[i + 1] == ' ')) {
            sentence_boundaries.push_back(i + 1);
        }
    }

    size_t start_idx = 0;
    int phrase_count = 0;

    for (size_t i = 0; i < sentence_boundaries.size(); ++i) {
        phrase_count++;
        if (phrase_count >= phrases) {
            size_t end_idx = sentence_boundaries[i];
            chunks.emplace_back(text.substr(start_idx, end_idx - start_idx));

            start_idx = sentence_boundaries[i - phrases + overlap + 1];
            phrase_count = overlap;
        }
    }

    if (start_idx < text.size()) {
        chunks.emplace_back(text.substr(start_idx));
    }

    return chunks;
}

PYBIND11_MODULE(text_chunker, m) {
    m.doc() = "A module to split text into overlapping chunks based on phrases.";
    m.def("splitTextIntoChunks", &splitTextIntoChunks,
          "Split text into chunks with overlap",
          pybind11::arg("text"), pybind11::arg("phrases"), pybind11::arg("overlap") = 1);
}
