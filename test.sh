#!/bin/bash

diff -u tests/outputs/basic_tree_structures/basic_tree_structure_1 <(node tests/basic_tree_structures/basic_tree_structure_1.mjs)
diff -u tests/outputs/basic_tree_structures/basic_tree_structure_2 <(node tests/basic_tree_structures/basic_tree_structure_2.mjs)
