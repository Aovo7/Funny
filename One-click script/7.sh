#!/bin/bash

echo "请输入数字:"
read number

if [ "$number" = "1" ]; then
    wget -O snell.sh --no-check-certificate https://git.io/Snell.sh && chmod +x snell.sh && ./snell.sh
elif [ "$number" = "2" ]; then
    wget -O ss-rust.sh --no-check-certificate https://raw.githubusercontent.com/xOS/Shadowsocks-Rust/master/ss-rust.sh && chmod +x ss-rust.sh && ./ss-rust.sh
else
    echo "请输入正确的数字哦"
fi
