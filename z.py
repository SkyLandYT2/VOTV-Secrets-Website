import os
import re

def remove_search_container(file_path):
  """Удаляет код <div class="search-container"> из HTML-файла.

  Args:
    file_path: Путь к HTML-файлу.

  Returns:
    True, если код был удален, иначе False.
  """

  with open(file_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

  # Регулярное выражение для поиска <div class="search-container">
  pattern = r'<div class="search-container">\s*<img src="../Images/SearchIcon\.png" alt="Search Icon" class="search-icon">\s*<input type="text" id="searchBar" class="search-bar" placeholder="Search...">\s*<div id="searchResults"></div>\s*</div>'

  # Удаляем код из HTML
  modified_content = re.sub(pattern, '', html_content)

  # Сохраняем изменения в файл
  with open(file_path, 'w', encoding='utf-8') as f:
    f.write(modified_content)

  # Возвращаем True, если код был удален
  return html_content != modified_content

def process_directory(directory_path):
  """Обрабатывает все HTML-файлы в указанной директории и ее поддиректориях.

  Args:
    directory_path: Путь к директории.

  Returns:
    Количество удаленных кодов <div class="search-container">.
  """

  deleted_count = 0
  for root, _, files in os.walk(directory_path):
    for file in files:
      if file.endswith('.html'):
        file_path = os.path.join(root, file)
        if remove_search_container(file_path):
          deleted_count += 1
  return deleted_count

# Путь к директории
directory_path = r'C:\Users\SkyLandYT2\Documents\VOTV-Secret-Archive'

# Обрабатываем директорию и получаем количество удаленных кодов
deleted_count = process_directory(directory_path)

# Выводим количество удаленных кодов
print(f"Удалено {deleted_count} кодов <div class=\"search-container\">.")