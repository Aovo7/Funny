#!/bin/bash
# 此脚本为整合菜单 方便使用 各一键脚本均搬运自网络 无商业用途
echo "------------------------"
echo "脚本目录"
echo "1.一键Snell"
echo "2.一键SS"
echo "3.一键TUIC"
echo "4.一键Hy2"
echo "5.一键Singbox"
echo "6.一键V2Ray(VMESS/Trojan+WS/gRPC/TCP(+TLS)"
echo "0.退出此脚本"
echo "输入"renew"更新此脚本"
echo "当运行相应脚本后 会进入对应脚本的菜单 若想调出此菜单 请输入./7.sh"
echo "请输入数字:"
read number

case $number in
    renew)
        curl -sS -O https://raw.githubusercontent.com/Aovo7/Funny/main/One-click%20script/7.sh && chmod +x 7.sh && ./7.sh
        ;;
    0)
        exit 0
        ;;
    1)
        wget -O snell.sh --no-check-certificate https://git.io/Snell.sh && chmod +x snell.sh && ./snell.sh
        ;;
    2)
        wget -O ss-rust.sh --no-check-certificate https://raw.githubusercontent.com/xOS/Shadowsocks-Rust/master/ss-rust.sh && chmod +x ss-rust.sh && ./ss-rust.sh
        ;;
    3)
        wget -N --no-check-certificate https://raw.githubusercontent.com/CCCOrz/auto-tuic/main/tuic.sh && bash tuic.sh
        ;;
    4)
        wget -N --no-check-certificate https://raw.githubusercontent.com/Misaka-blog/hysteria-install/main/hy2/hysteria.sh && bash hysteria.sh
        ;;
    5)
        wget -N -O /root/singbox.sh https://raw.githubusercontent.com/TinrLin/sing-box/main/Install.sh && chmod +x /root/singbox.sh && ln -sf /root/singbox.sh /usr/local/bin/singbox && bash /root/singbox.sh
        ;;
    6)
        bash <(wget -qO- -o- https://git.io/v2ray.sh)
        ;;
    *)
        echo "请输入正确的数字哦"
        ;;
esac
