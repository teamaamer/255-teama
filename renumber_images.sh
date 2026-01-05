#!/bin/bash

# Script to renumber images sequentially
cd "/Users/hamza/Downloads/255Agency-main 4/public/images"

# Create a temporary directory for renumbering
mkdir -p temp_rename

# Get all .webp files sorted numerically
counter=1
for file in $(ls -1 *.webp | grep -E '^[0-9]+\.webp$' | sed 's/\.webp$//' | sort -n | sed 's/$/.webp/'); do
    # Copy to temp with new sequential number
    cp "$file" "temp_rename/${counter}.webp"
    echo "Renumbering: $file -> ${counter}.webp"
    ((counter++))
done

# Move original files to backup
mkdir -p backup_original
mv [0-9]*.webp backup_original/

# Move renumbered files back
mv temp_rename/*.webp .
rmdir temp_rename

echo "Renumbering complete! Original files backed up in backup_original/"
echo "Total files renumbered: $((counter-1))"
