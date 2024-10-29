from setuptools import setup
from pybind11.setup_helpers import Pybind11Extension, build_ext

# Define the extension module
ext_modules = [
    Pybind11Extension(
        "text_chunker",
        ["text_chunker.cpp"],
    ),
]

# Setup configuration
setup(
    name="text_chunker",
    version="1.0",
    description="A Python module to split text into overlapping chunks based on phrases.",
    ext_modules=ext_modules,
    cmdclass={"build_ext": build_ext},
)
