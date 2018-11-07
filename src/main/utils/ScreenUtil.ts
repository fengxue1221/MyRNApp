/**
 * 屏幕工具类，适配屏幕，使用px
 *
 * 设备的像素密度，例如：
 * PixelRatio.get() === 1       mdpi Android设备（160dpi） 对应android分辨率320*480
 * PixelRatio.get() === 1.5     hdpi Android设备（240dpi） 对应android分辨率480*800
 * PixelRatio.get() === 2       iPhone 4,4S,5,5C,5S,6, xhdpi Android设备（320dpi）
 * iphone尺寸： 6/6s/7/8（750*1334px）
 * android分辨率：720*1280px
 *
 * PixelRatio.get() === 3       iPhone 6p, xxhdpi Android设备（480dpi）
 * iphone尺寸：6p/6sp/7p/8p（1242*2208px）     x（1125*2436px）
 * android分辨率：1080*1920px
 *
 * PixelRatio.get() === 3.5     Nexus 6    xxxhdpi  对应android分辨率1440*2560
 */
import {Dimensions, PixelRatio} from "react-native";

export const deviceWidth = Dimensions.get('window').width;//设备的宽度
export const deviceHeight = Dimensions.get('window').height;//设备的高度

let pixelRatio = PixelRatio.get();//获取当前设备的像素密度
const defaultPixel = 3;//基础设计图对应的像素密度
//px转换成dp
const w = 1080 / defaultPixel;
const h = 1920 / defaultPixel;
const scale = Math.min(deviceHeight / h, deviceWidth / w);//Math.min(x,y)返回最低值的数字
export const scaleSize = (size: number) => {
    size = Math.round(size * scale + 0.5);//Math.round(x)四舍五入，+0.5作用是只向上取整
    return size / defaultPixel;
}
