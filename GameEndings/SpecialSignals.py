import os
import requests
from time import sleep
from tqdm import tqdm
from concurrent.futures import ThreadPoolExecutor

# Определение начального и конечного номера
start = 1
end = 300

# URL-шаблон
url_template = "https://web.archive.org/web/20240506010721im_/https://squarezeb.github.io/VOTV-Secrets-Website/Entities/Images/{}.mp3"

# Папка для сохранения изображений
save_folder = "images"

# Создание папки, если её нет
os.makedirs(save_folder, exist_ok=True)

# Количество повторных попыток
max_retries = 5

# Задержка между попытками в секундах
retry_delay = 5

# Чтение прокси из файла
proxy_file = "C:/Users/SkyLandYT2/Downloads/proxy.txt"
with open(proxy_file, 'r') as f:
    proxies = [line.strip() for line in f.readlines()]

# Функция для скачивания одного изображения
def download_image(i, proxy):
    file_name = f"{i}.png"
    file_path = os.path.join(save_folder, file_name)

    if os.path.exists(file_path):
        print(f"{file_name} уже существует, пропускаем.")
        return

    url = url_template.format(i)
    attempt = 0

    # Разделение прокси на компоненты
    try:
        ip, port, user, password = proxy.split(':')
        proxy_url = f"http://{user}:{password}@{ip}:{port}"
        proxy_dict = {
            "http": proxy_url,
            "https": proxy_url
        }
    except ValueError:
        print(f"Неверный формат прокси: {proxy}")
        return

    while attempt < max_retries:
        try:
            response = requests.get(url, stream=True, proxies=proxy_dict)
            response.raise_for_status()  # Генерирует исключение для HTTP ошибок

            # Получение размера файла
            file_size = int(response.headers.get('content-length', 0))
            file_size_mb = file_size / (1024 * 1024)  # Размер файла в мегабайтах

            # Сохранение изображения
            with open(file_path, 'wb') as file:
                # Использование tqdm для отображения прогресса
                with tqdm(total=file_size, unit='B', unit_scale=True, unit_divisor=1024, desc=file_name) as pbar:
                    for chunk in response.iter_content(chunk_size=8192):
                        if chunk:
                            file.write(chunk)
                            pbar.update(len(chunk))

            print(f"Изображение {file_name} успешно сохранено.")
            return  # Если загрузка успешна, выйти из функции
        except requests.RequestException as e:
            print(f"Ошибка при скачивании {file_name}: {e}")
            attempt += 1
            if attempt < max_retries:
                print(f"Попытка {attempt} из {max_retries}. Повтор через {retry_delay} секунд...")
                sleep(retry_delay)
            else:
                print(f"Не удалось скачать {file_name} после {max_retries} попыток.")
            return

# Использование многопоточности для загрузки изображений
with ThreadPoolExecutor(max_workers=10) as executor:
    for i in range(start, end + 1):
        proxy = proxies[i % len(proxies)]
        executor.submit(download_image, i, proxy)
