import os

# 現在の作業ディレクトリを表示
print("現在の作業ディレクトリ:", os.getcwd())

# 確認したいファイルのパス
file_paths = [
    'static/img/works-img1.png',
    'static/img/works-img2.png',
    'static/img/works-img3.png',
    # 他のファイルパスも追加
]

# ファイルの存在を確認
for file_path in file_paths:
    absolute_path = os.path.abspath(file_path)
    if os.path.exists(absolute_path):
        print(f"{absolute_path} は存在します。")
    else:
        print(f"{absolute_path} は存在しません。")