import os
import re

files_to_update = [
    'src/pages/Home.tsx',
    'src/pages/Ayurveda.tsx',
    'src/pages/Kalari.tsx',
    'src/pages/Cosmetology.tsx',
    'src/components/Hero.tsx',
    'src/components/skin/SkinHero.tsx'
]

for file_path in files_to_update:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r') as f:
        content = f.read()
        
    # Check if we need to import Image
    if '<img' in content and 'import { Image }' not in content:
        # Replace <img with <Image
        content = content.replace('<img', '<Image')
        
        # Determine import path
        depth = file_path.count('/') - 1 # 'src/pages' -> 1
        if 'src/components/skin' in file_path:
            import_statement = "import { Image } from '../../components/Image';\n"
        elif 'src/components' in file_path:
            import_statement = "import { Image } from './Image';\n"
        else:
            import_statement = "import { Image } from '../components/Image';\n"
            
        # Add import after the first import or at the top
        if 'import' in content:
            first_import_idx = content.find('import')
            end_of_first_import = content.find('\n', first_import_idx)
            content = content[:end_of_first_import+1] + import_statement + content[end_of_first_import+1:]
        else:
            content = import_statement + content
            
        with open(file_path, 'w') as f:
            f.write(content)
        print(f"Updated {file_path}")

