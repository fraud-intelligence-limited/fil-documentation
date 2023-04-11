#!/bin/bash

pandoc manual.rst \
    --standalone \
    --toc \
    --include-before-body intro.rst\
    -V linkcolor:blue \
    -V geometry:a4paper \
    -V geometry:margin=2cm \
    -V mainfont="DejaVu Serif" \
    -V monofont="DejaVu Sans Mono" \
    -o api-orillion.pdf

#    --include-in-header latex-config.tex \