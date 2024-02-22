# polkadot_addressswitching
波卡通用地址切换

参考文章：https://learnblockchain.cn/article/3424

参考网站：https://polkadot-address-convertor.netlify.app/

https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json //这里可以看到0是polkadot 2是kusama 以此类推

const polkadot_address = polkadots.encodeAddress(polkadots.decodeAddress(address), "0") //切换不同地址需要输入不同参数 这里是通用地址转波卡地址

![image](https://github.com/catsats/polkadot_addressswitching/assets/154321884/1e4e02f0-0bff-4ed5-a28f-4e9c0dffd4da)
