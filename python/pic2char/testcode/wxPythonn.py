import wx

def open_file_dialog():
    app = wx.App(False)  # 创建wxPython应用
    dialog = wx.FileDialog(None, "选择图片", wildcard="Image files (*.png;*.jpg;*.jpeg;*.bmp)|*.png;*.jpg;*.jpeg;*.bmp", style=wx.FD_OPEN)
    
    if dialog.ShowModal() == wx.ID_OK:
        file_path = dialog.GetPath()  # 获取选择的文件路径
        return file_path
    
    return None  # 如果用户取消了选择，返回 None

file_path = open_file_dialog()
print(file_path)
