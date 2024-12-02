import easygui

def open_file_dialog():
    file_path = easygui.fileopenbox("选择图片", "选择一个文件", filetypes=["*.png", "*.jpg", "*.jpeg", "*.bmp"])
    return file_path

file_path = open_file_dialog()
print(file_path)
