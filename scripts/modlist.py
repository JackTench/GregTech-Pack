# Jack Tench 2024
# GregTech Pack

# Simple python script to write modlist.txt

import os

mod_folder = ".minecraft/mods"

output_file = "modlist.txt"

# Remove old mod list.
if os.path.exists(output_file):
    os.remove(output_file)

# Write replacement mod list.
files = os.listdir(mod_folder)
with open(output_file, 'w') as fp:
    for f in files:
        fp.write(f)
        fp.write("\n")