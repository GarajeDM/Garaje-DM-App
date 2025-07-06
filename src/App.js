import React from 'react';
import { ShoppingCart, Tag, Box, Home, Phone, Info, ChevronLeft, ChevronRight, XCircle } from 'lucide-react';

// Main App Component
const App = () => {
  // Aquí es donde defines tus productos.
  // Cada elemento en este array es un objeto que representa un producto.
  const products = [
    // Nota: 'images' es una ARRAY de URLs
    { id: 1, name: 'Smart Watch negro basico', price: '15.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751733056/IMG_20250218_140635_pgrkjt.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751733078/IMG_20250218_140943_rkqixd.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751728224/IMG_20250218_135226_apheax.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751728223/IMG_20250218_135216_ynq3oy.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751728223/IMG_20250218_135126_qnxqvz.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751728223/IMG_20250218_135142_nhxwnl.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751728222/IMG_20250218_135131_sjreqw.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751728222/IMG_20250218_135107_et0oqk.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751728222/IMG_20250218_135059_hlb0wj.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751728222/IMG_20250218_134959_oa3b9c.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751728222/IMG_20250218_134950_dljzry.jpg'], type: 'new', description: 'Smart Watch negro basico.' },
    { id: 2, name: 'Smart Watch negro acero', price: '38.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751733011/IMG_20250630_105124_rvmfr4.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729779/IMG_20250318_133206_qkrxgg.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729775/IMG_20250318_132619_steli1.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729772/IMG_20250318_132419_shkcjq.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729769/IMG_20250318_132252_jqlhq3.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729766/IMG_20250318_132259_caeey0.jpg'], type: 'new', description: 'Smart Watch negro acero.' },
    { id: 3, name: 'Smart Watch deportivo', price: '38.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751733378/IMG_20250214_122758_dc2vls.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751733406/IMG_20250214_121405_rgu9uo.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729828/IMG_20250214_093518_mkjiim.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729826/IMG_20250214_120342_xvbxik.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729823/IMG_20250214_120217_lluzba.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729821/IMG_20250214_120608_xt4cjy.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729820/IMG_20250214_120510_ncuexl.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729815/IMG_20250214_120333_c5bz3k.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729812/IMG_20250214_120802_ufdfgi.jpg'], type: 'new', description: 'Smart Watch deportivo.' },
    { id: 4, name: 'Pulseras de cuero', price: '1.50', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729856/IMG_20250317_142356_z1fzfu.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729852/IMG_20250317_142413_v8xkz5.jpg'], type: 'new', description: 'Pulseras de cuero.' },
    { id: 5, name: 'Figura Monkey d Luffy sentado 10cm', price: '5.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729892/IMG_20241213_145442_ukytex.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729890/IMG_20241213_145324_fjaehw.jpg'], type: 'new', description: 'Figura Monkey d Luffy sentado 10cm.' },
    { id: 6, name: 'Figura de Monkey d Luffy 18cm', price: '19.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729915/IMG_20250115_150602_z7f1ck.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729923/IMG_20250114_155317_n7klrn.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729920/IMG_20250115_150539_re14am.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729913/IMG_20250114_155248_xg4aol.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729908/IMG_20250114_155225_zjmxuf.jpg'], type: 'new', description: 'Figura de Monkey d Luffy 18cm.' },
    { id: 7, name: 'Figura Monkey d Luffy 21cm', price: '19.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729950/IMG_20250129_160002_i16mhz.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729947/IMG_20250129_155947_cbigsb.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729956/IMG_20250129_155929_qz0kzz.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729952/IMG_20250129_160014_xnhmgm.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729948/IMG_20250129_155936_akk8fu.jpg'], type: 'new', description: 'Figura Monkey d Luffy 21cm.' },
    { id: 8, name: 'Figura Dragon Ball Majin Bu 21cm', price: '24.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729980/IMG_20250129_160156_piow17.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729978/IMG_20250129_160210_mcbgk1.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729976/IMG_20250129_160217_g7rg2t.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729982/IMG_20250129_160203_rkcbhz.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729984/IMG_20250129_160326_zeit2o.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729986/IMG_20250129_160338_gw752f.jpg'], type: 'new', description: 'Figura Dragon Ball Majin Bu 21cm.' },
    { id: 9, name: 'Figura Torso Itachi Uchiha 15cm', price: '12.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730000/IMG_20250129_160429_a6nj4b.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751729998/IMG_20250129_160415_lyumco.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730002/IMG_20250129_160524_jfc3kr.jpg'], type: 'new', description: 'Figura Torso Itachi Uchiha 15cm.' },
    { id: 10, name: 'Figura Itachi Uchiha 20cm', price: '19.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730022/IMG_20250318_104909_fhkfw4.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730020/IMG_20250318_104921_ieoswr.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730024/IMG_20250318_104933_xhmpcg.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730018/IMG_20250318_105028_pdfrdy.jpg'], type: 'new', description: 'Figura Itachi Uchiha 20cm.' },
    { id: 11, name: 'Figura Zoro Roronoa _cm', price: '10.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730053/IMG_20250318_105238_tyvqyn.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730050/IMG_20250318_105316_ptnsui.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730048/IMG_20250318_105309_hmxwci.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730046/IMG_20250318_105231_vpyknl.jpg'], type: 'new', description: 'Figura Zoro Roronoa _cm.' },
    { id: 12, name: 'Figura Itachi Uchiha 28cm', price: '38.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730086/IMG_20250318_105544_x2pxah.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730075/IMG_20250318_105722_vi6qin.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730081/IMG_20250318_105604_o9jlus.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730079/IMG_20250318_105637_x1ahty.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730100/IMG_20250318_105641_zdkyhm.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730098/IMG_20250318_105626_vdezxc.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730079/IMG_20250318_105637_x1ahty.jpg'], type: 'new', description: 'Figura Itachi Uchiha 28cm.' },
    { id: 13, name: 'Figura Pikachu pequeña', price: '4.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730140/IMG_20241213_155642_jqlqxw.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730137/IMG_20241213_155651_pui16x.jpg'], type: 'new', description: 'Figura Pikachu pequeña.' },
    { id: 14, name: 'Cuadro de Batman Negro-Amarillo', price: '0.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730203/IMG_20231228_195539_rejlpl.jpg'], type: 'new', description: 'Cuadro de Batman Negro-Amarillo.' },
    { id: 15, name: 'Cuadro Jinx de Arcane', price: '0.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730223/IMG_20250128_101656_pmr4uu.jpg'], type: 'new', description: 'Cuadro Jinx de Arcane.' },
    { id: 16, name: 'Cuadro multicapa Arcane 1', price: '220.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730301/IMG_20250324_152321_clhtc4.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730298/IMG_20250324_152150_dxyq9z.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730295/IMG_20250324_150628_hreokw.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730293/IMG_20250324_150603_b5ridz.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730285/IMG_20250324_150656_kxbijx.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730282/IMG_20250324_150649_p5mfx5.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730277/IMG_20250324_150557_ma53yk.jpg'], type: 'new', description: 'Cuadro multicapa Arcane 1.' },
    { id: 17, name: 'Cuadro multicapa Arcane 2', price: '220.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730536/IMG_20250128_101739_kvpwff.jpg'], type: 'new', description: 'Cuadro multicapa Arcane 2.' },
    { id: 18, name: 'Cuadro Multicapa cuadrado Mandala 1', price: '68.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730778/IMG_20250128_101711_wuyvyi.jpg'], type: 'new', description: 'Cuadro Multicapa cuadrado Mandala 1.' },
    { id: 19, name: 'Cuadro multicapa Cuadrado mandala 2', price: '68.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730792/IMG_20250128_101627_yjyyce.jpg'], type: 'new', description: 'Cuadro multicapa Cuadrado mandala 2.' },
    { id: 20, name: 'Cuadro multicapa cuadrado Fig Cuenca 1', price: '68.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731573/IMG_20250128_101646_kmyhdh.jpg'], type: 'new', description: 'Cuadro multicapa cuadrado Fig Cuenca 1.' },
    { id: 21, name: 'Cuadro multicapa cuadrado Fig Cuenca 2', price: '68.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731594/IMG_20250128_101719_av8tzx.jpg'], type: 'new', description: 'Cuadro multicapa cuadrado Fig Cuenca 2.' },
    { id: 22, name: 'Cuadro Lobo 1', price: '0.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730811/IMG_20250128_101702_fk0i4c.jpg'], type: 'new', description: 'Cuadro Lobo 1 .' },
    { id: 23, name: 'Cuadros Verdes Abstractos 50x50 Formas Shalva Cuenca', price: '0.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731126/11_ke6wrx.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731122/12_vtefdr.jpg'], type: 'new', description: 'Cuadros Verdes Abstractos 50x50 Formas Shalva Cuenca.' },
    { id: 24, name: 'Cuadros Rosados 50x50 Figura Shalva Jama Coaque', price: '0.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731202/IMG_20231005_191711_zn4ttf.jpg'], type: 'new', description: 'Cuadros Rosados 50x50 Figura Shalva Jama Coaque.' },
    { id: 25, name: 'Cuadro 50x50 colores esparcidos', price: '0.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731259/IMG_20231003_112541_l227ar.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731269/IMG_20231003_112347_jq0yaj.jpg'], type: 'new', description: 'Cuadro 50x50 colores esparcidos .' },
    { id: 26, name: 'Cuadro Mickey Mouse', price: '0.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731348/IMG_20231106_143234_gi0las.jpg'], type: 'new', description: 'Cuadro Mickey Mouse.' },
    { id: 27, name: 'Cuadro Mapa Mundi', price: '0.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731363/WhatsApp_Image_2025-07-04_at_3.09.49_PM_n1aqp9.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731368/WhatsApp_Image_2025-07-04_at_3.09.50_PM_vznebm.jpg'], type: 'new', description: 'Cuadro Mapa Mundi.' },
    { id: 28, name: 'Cuadro multicapa Arcane 3', price: '110.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731480/WhatsApp_Image_2025-07-04_at_3.09.50_PM_2_wb3fcd.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731485/WhatsApp_Image_2025-07-04_at_3.09.53_PM_qujl0x.jpg'], type: 'new', description: 'Cuadro multicapa Arcane 3.' },
    { id: 29, name: 'Cuadro Multicapa Cuenca 1', price: '220.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730578/WhatsApp_Image_2025-07-04_at_3.09.58_PM_1_ab92cy.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730574/WhatsApp_Image_2025-07-04_at_3.09.53_PM_2_riv4dn.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730581/WhatsApp_Image_2025-07-04_at_3.09.53_PM_3_jzgpam.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730571/WhatsApp_Image_2025-07-04_at_3.09.55_PM_e6liep.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730568/WhatsApp_Image_2025-07-04_at_3.09.58_PM_qxyd9i.jpg'], type: 'new', description: 'Cuadro Multicapa Cuenca 1.' },
    { id: 30, name: 'Cuadro Multicapa Cuenca 2', price: '220.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751730608/WhatsApp_Image_2025-07-04_at_3.09.50_PM_1_nilrwm.jpg'], type: 'new', description: 'Cuadro Multicapa Cuenca 2.' },
    { id: 31, name: 'Cuadros Naranja 50x50 Jama Coaque', price: '28.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731624/WhatsApp_Image_2025-07-04_at_3.09.59_PM_1_myr28b.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731646/WhatsApp_Image_2025-07-04_at_3.09.58_PM_3_puuirw.jpg'], type: 'new', description: 'Cuadros Naranja 50x50 Jama Coaque .' },
    { id: 32, name: 'Cuadro Naranja con dorado 50x50 Jama Coaque', price: '28.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731663/WhatsApp_Image_2025-07-04_at_3.09.59_PM_iemvn4.jpg'], type: 'new', description: 'Cuadro Naranja con dorado 50x50 Jama Coaque.' },
    { id: 33, name: 'Relojes de Cuarzo Varios modelos', price: '10.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731857/relojes_ydplte.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731874/IMG_20250322_124751_g0ipam.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731884/IMG_20250322_130527_wxpulf.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731733/08_dtbcb0.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751731972/IMG_20250318_110244_gvkhst.jpg'], type: 'new', description: 'Relojes de Cuarzo Varios modelos.' },
    { id: 34, name: 'Audifono Bluetoht inalambrico', price: '10.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732042/IMG_20250218_142227_cdtxj1.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732036/IMG_20250218_142321_tfvekh.jpg'], type: 'new', description: 'Audifono Bluetoht inalambrico.' },
    { id: 35, name: 'Audifonos Bluetoth Inalambricos tipo casco', price: '10.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732078/IMG_20250218_144400_bn7cxd.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732073/IMG_20250218_144328_fmmpsq.jpg'], type: 'new', description: 'Audifonos Bluetoth Inalambricos tipo casco.' },
    { id: 36, name: 'Reloj de bolsillo one piece', price: '9.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732230/484572407_1362812321428777_4902072326101400743_n_owomkq.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732182/484499610_1791116845144956_4134344580512534829_n_vhm4jt.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732224/484505164_1173774540908571_7436071263638119602_n_tac9t3.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732188/484517358_474169648997715_3582802961423728604_n_z1aehu.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732177/484439007_9450146755050423_1498682268894293519_n_o8vwji.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732102/484435745_1156362245709005_3537777503555811759_n_wevnsy.jpg'], type: 'new', description: 'Reloj de bolsillo one piece.' },
    { id: 37, name: 'Gafas + Reloj + Correa', price: '19.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732425/475687164_591923127149596_7575477801648718981_n_q7f2xx.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732332/475650569_1312254763439295_7955301184821352512_n_csoluk.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732322/475665467_1706450056751611_7846797343196134958_n_b8zncl.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732431/475265941_1650401105874938_2862930848631241844_n_hrnej7.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732551/475258673_861487606015704_8222168683582518245_n_d80vtp.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732557/475271709_849916600525880_3990236477085941866_n_y2fs4m.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732279/475304071_1780626729353376_5483917581855012640_n_i9drpa.jpg'], type: 'new', description: 'Gafas + Reloj + Correa.' },
    { id: 38, name: 'Tableta digitalizadora Huion Inspiroy H430p', price: '40.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732588/475380749_2114461389016404_2531731261137769259_n_csp2y1.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732599/475376974_1152445373555945_4230466822513570272_n_fsv7r2.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732594/475315145_1298690444668753_107407992037275165_n_ghk2no.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732582/475240313_1140872657710642_8594438121151274774_n_gpf6ni.jpg', 'https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732576/475128671_596478676567170_4716877563988528541_n_ifreo1.jpg'], type: 'used', description: 'Tableta digitalizadora Huion Inspiroy H430p.' },
    { id: 39, name: 'Cuadro de arbol celeste', price: '80.00', images: ['https://res.cloudinary.com/dyewrbhsm/image/upload/v1751732633/WhatsApp_Image_2025-07-04_at_3.14.23_PM_1_rsjye0.jpg'], type: 'new', description: 'Cuadro de arbol celeste.' },
  ];

  // State for current view (using simple string for navigation)
  const [currentView, setCurrentView] = React.useState('home');
  // State for the shopping cart
  // Each item in the cart will have { product, quantity }
  const [cart, setCart] = React.useState([]);
  // State for showing payment confirmation message
  const [showPaymentConfirmation, setShowPaymentConfirmation] = React.useState(false);

  // Function to add a product to the cart
  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === productToAdd.id);
      if (existingItem) {
        // If product already in cart, increase quantity
        return prevCart.map((item) =>
          item.product.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If new product, add to cart with quantity 1
        return [...prevCart, { product: productToAdd, quantity: 1 }];
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  // Function to update quantity of a product in the cart
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      if (newQuantity <= 0) {
        return prevCart.filter((item) => item.product.id !== productId);
      }
      return prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  // Calculate total items in cart for the icon badge
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price of items in cart
  const totalCartPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.product.price);
    return total + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  // Simulate checkout process
  const handleCheckout = () => {
    if (cart.length === 0) {
      // Use a custom message box instead of alert()
      setShowPaymentConfirmation({ message: 'Tu carrito está vacío. Añade productos antes de proceder al pago.', type: 'error' });
      return;
    }
    // Simulate payment processing
    // In a real app, this would involve sending data to a payment gateway
    console.log('Procesando pago para:', cart);
    // Clear cart after simulated payment
    setCart([]);
    setShowPaymentConfirmation({ message: '¡Gracias por tu compra! Tu pedido ha sido procesado con éxito. (Simulación de pago)', type: 'success' });
  };

  // Product Card Component with Carousel
  const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const goToPreviousImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
        <div className="relative w-full h-48">
          <img
            src={product.images[currentImageIndex]} // Muestra la imagen actual del carrusel
            alt={`${product.name} - Imagen ${currentImageIndex + 1}`}
            className="w-full h-full object-cover object-center"
            // Fallback para errores de carga de imagen
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/300x300/F0F0F0/333333?text=Imagen+No+Disponible`;
            }}
          />
          {product.images.length > 1 && ( // Mostrar flechas solo si hay más de una imagen
            <>
              <button
                onClick={goToPreviousImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
                {product.images.map((_, index) => (
                  <span
                    key={index}
                    className={`block w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                    }`}
                    aria-label={`Ir a la imagen ${index + 1}`}
                  ></span>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{product.description}</p>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-2xl font-bold text-indigo-700">€{parseFloat(product.price).toFixed(2)}</span>
            <button
              onClick={() => addToCart(product)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center shadow-md"
            >
              <ShoppingCart size={18} className="mr-2" /> Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Filter products by type - These need to be defined within the App component's scope
  const newProducts = products.filter(p => p.type === 'new');
  const usedProducts = products.filter(p => p.type === 'used');


  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      {/* HEADER, CDN and CSS <style> block were moved to public/index.html */}

      {/* Header (This part of the Header is part of the JSX render, not the CDN/Style tags) */}
      <header className="bg-white shadow-md py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-extrabold text-indigo-700">
            Garaje Dm
          </div>
          <nav className="flex space-x-4 sm:space-x-6 items-center">
            <button
              onClick={() => setCurrentView('home')}
              className={`flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${currentView === 'home' ? 'bg-indigo-100 text-indigo-700 font-semibold' : ''}`}
            >
              <Home size={20} className="mr-2" /> Inicio
            </button>
            <button
              onClick={() => setCurrentView('products')}
              className={`flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${currentView === 'products' ? 'bg-indigo-100 text-indigo-700 font-semibold' : ''}`}
            >
              <Box size={20} className="mr-2" /> Productos
            </button>
            <button
              onClick={() => setCurrentView('about')}
              className={`flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${currentView === 'about' ? 'bg-indigo-100 text-indigo-700 font-semibold' : ''}`}
            >
              <Info size={20} className="mr-2" /> Sobre Nosotros
            </button>
            <button
              onClick={() => setCurrentView('contact')}
              className={`flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${currentView === 'contact' ? 'bg-indigo-100 text-indigo-700 font-semibold' : ''}`}
            >
              <Phone size={20} className="mr-2" /> Contacto
            </button>
            {/* Shopping Cart Icon with Badge */}
            <button
              onClick={() => setCurrentView('cart')}
              className={`relative flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${currentView === 'cart' ? 'bg-indigo-100 text-indigo-700 font-semibold' : ''}`}
              aria-label="Ver carrito de compras"
            >
              <ShoppingCart size={20} />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8 rounded-b-3xl shadow-lg">
              <div className="container mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-down">
                  Bienvenido a Garaje Dm
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mb-8 animate-fade-in-up">
                  Tu destino para productos nuevos y tesoros usados.
                </p>
                <button
                  onClick={() => setCurrentView('products')}
                  className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105 animate-bounce-in"
                >
                  Explora Nuestros Productos
                </button>
              </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                  <Tag size={32} className="inline-block mr-3 text-indigo-600" /> Productos Destacados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {products.slice(0, 4).map(product => ( // Show first 4 products as featured
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="text-center mt-12">
                  <button
                    onClick={() => setCurrentView('products')}
                    className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transform transition-transform duration-300 hover:scale-105"
                  >
                    Ver Todos los Productos
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {currentView === 'products' && (
  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        <Box size={32} className="inline-block mr-3 text-indigo-600" /> Todos Nuestros Productos
      </h2>

      {/* Sección de Productos Nuevos */}
      <h3 className="text-2xl font-bold text-gray-700 mb-8 mt-12 text-center">Productos Nuevos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
        {newProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Sección de Productos Usados */}
      <h3 className="text-2xl font-bold text-gray-700 mb-8 text-center">Productos Usados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {usedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Mensaje si no hay productos de un tipo (opcional, pero útil) */}
      {newProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-4">No hay productos nuevos disponibles en este momento.</p>
      )}
      {usedProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-4">No hay productos usados disponibles en este momento.</p>
      )}
      {products.length === 0 && (
        <p className="text-center text-gray-600 mt-4">No hay productos en general.</p>
      )}

    </div>
  </section>
)}

        {currentView === 'cart' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                <ShoppingCart size={32} className="inline-block mr-3 text-indigo-600" /> Tu Carrito de Compras
              </h2>
              {showPaymentConfirmation && (
                <div className={`mb-6 p-4 rounded-lg text-center ${showPaymentConfirmation.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} animate-fade-in-down`}>
                  <p className="font-semibold">{showPaymentConfirmation.message}</p>
                  <button
                    onClick={() => setShowPaymentConfirmation(false)}
                    className="mt-2 text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    Cerrar
                  </button>
                </div>
              )}
              {cart.length === 0 ? (
                <p className="text-center text-gray-600 text-xl">Tu carrito está vacío.</p>
              ) : (
                <>
                  <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex items-center justify-between border-b border-gray-200 py-4 last:border-b-0">
                        <div className="flex items-center">
                          <img src={item.product.images[0]} alt={item.product.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                          <div>
                            <h3 className="font-semibold text-lg text-gray-800">{item.product.name}</h3>
                            <p className="text-gray-600">€{parseFloat(item.product.price).toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-l-md"
                              aria-label="Disminuir cantidad"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border-x border-gray-300 text-gray-800">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-r-md"
                              aria-label="Aumentar cantidad"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-600 hover:text-red-800 transition-colors duration-200"
                            aria-label="Remover del carrito"
                          >
                            <XCircle size={24} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white shadow-lg rounded-xl p-6 flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-800">Total: €{totalCartPrice.toFixed(2)}</span>
                    <button
                      onClick={handleCheckout}
                      className="bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transform transition-transform duration-300 hover:scale-105 flex items-center"
                    >
                      Proceder al Pago
                    </button>
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {currentView === 'about' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto max-w-3xl bg-white shadow-lg rounded-xl p-8 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                <Info size={32} className="inline-block mr-3 text-indigo-600" /> Sobre Garaje Dm
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bienvenido a Garaje Dm, tu destino único para encontrar una amplia variedad de productos. Nos especializamos en traer a nuestros clientes tanto **productos nuevos** con las últimas tendencias, como **tesoros usados** que aún tienen mucho que ofrecer. Creemos en la sostenibilidad y en dar una segunda vida a artículos de calidad.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestra misión es proporcionar una experiencia de compra fácil y agradable, ofreciendo una selección curada de artículos que van desde tecnología y electrónica hasta coleccionables y arte. Cada producto es cuidadosamente revisado para asegurar su calidad y funcionalidad.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ubicados en **Cuenca, Azuay, Ecuador**, nos enorgullece ser parte de la comunidad local y servir a nuestros vecinos. Nuestro compromiso es tu satisfacción, brindando productos a precios justos y un servicio al cliente excepcional. ¡Gracias por elegir Garaje Dm!
              </p>
            </div>
          </section>
        )}

        {currentView === 'contact' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto max-w-2xl bg-white shadow-lg rounded-xl p-8 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                <Phone size={32} className="inline-block mr-3 text-indigo-600" /> Contáctanos
              </h2>
              <div className="text-gray-700 text-lg space-y-4">
                <p>¿Tienes alguna pregunta o necesitas ayuda? No dudes en contactarnos. Estamos aquí para asistirte.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Teléfono:</strong> <a href="tel:+593987654321" className="text-indigo-600 hover:underline">+593 98 765 4321</a></li>
                  <li><strong>Correo Electrónico:</strong> <a href="mailto:info@garajedm.com" className="text-indigo-600 hover:underline">info@garajedm.com</a></li>
                  <li><strong>Dirección:</strong> [Tu Dirección Completa Aquí], Cuenca, Azuay, Ecuador</li>
                  <li><strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</li>
                </ul>
                <p>También puedes seguirnos en nuestras redes sociales para estar al tanto de las últimas novedades y ofertas.</p>
                {/* Puedes añadir enlaces a tus redes sociales aquí */}
                <div className="flex justify-center space-x-6 mt-6">
                  {/* Ejemplo de un ícono de red social, necesitarías más si tienes */}
                  {/* Por ejemplo, <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800"><Facebook size={36} /></a> */}
                  {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800"><Instagram size={36} /></a> */}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4 sm:px-6 lg:px-8 mt-12 rounded-t-xl">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Garaje Dm. Todos los derechos reservados.</p>
          <p>Hecho con <span role="img" aria-label="love">❤️</span> en Cuenca, Azuay, Ecuador.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
