def base64_encode(input_string):
    base64_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    binary_string='' #存储二级制字符串

    for char in input_string:
        binary_string += format(char, '08b') #将每个字符转换为8位二进制字符串
    groups_num=len(binary_string)//6
    padding_num=len(binary_string)%6
    if padding_num!=0:
        binary_string+='0'*(6-padding_num) #补0
    encoded='' #存储编码后的结果
    for i in range(groups_num):
        group=binary_string[i*6:(i+1)*6]
        encoded+=base64_chars[int(group,2)]
    if padding_num==1:
        encoded+='='
    elif padding_num==2:    
        encoded+='=='
    return encoded
## 这个函数的输入其实还是字符串，并不是二进制数据





##现在写一个把ASCII字符串转化为二进制输出的
def base64_decode(str):
    base64_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    base64_chars_dict={}
    for(i,ch) in enumerate(base64_chars):
        base64_chars_dict[ch]=i   #这两行创建字典简直太方便了
    '''
    enumerate 是 Python 内置的一个函数，它用于将可迭代对象（如列表、字符串等）转换为一个索引序列。具体来说，它返回一个迭代器，该迭代器生成一个包含索引和对应值的元组。
    '''
    #看下结尾有几个=字符，去掉并且保存数量
    #直接保存输出  每个字符看到位置在哪？ 然后就是对应的哪个数字
    count=0;
    output_str=''
    for ch in str:
        if(ch=='='):
            count+=1
            continue
        # 这里定义一个循环？ 算了还是一个字典吧
        output_str+=format(base64_chars_dict[ch],'06b') 
    # 这里处理刚才01串末尾加的0
    output_str=output_str[0:-count]
    return output_str



    
    
   



data = "Hello"
encoded_data = data.encode()  # 使用 UTF-8 编码
for char in encoded_data:   
    print(format(char,'08b'))
print(encoded_data)  # 输出：b'Hello'


   