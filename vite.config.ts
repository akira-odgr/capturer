import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteImagemin({
            // 各種画像フォーマットの設定
            gifsicle: {
                optimizationLevel: 7, // GIFの圧縮レベル
                interlaced: false, // インターレースを無効化
            },
            optipng: {
                optimizationLevel: 7, // PNGの圧縮レベル
            },
            mozjpeg: {
                quality: 75, // JPEGの画質
            },
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox", // viewBoxを削除しない
                        active: false,
                    },
                    {
                        name: "removeEmptyAttrs", // 空の属性を削除
                        active: true,
                    },
                ],
            },
            webp: {
                quality: 75, // WebPの画質
            },
        }),
    ],

    build: {
        rollupOptions: {
            output: {
                // アセット（画像、フォント、CSSなど）のファイル名を指定
                assetFileNames: (assetInfo) => {
                    // 画像ファイル（png, jpg, gif, svg, webp）を "images" フォルダに格納
                    if (
                        /\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name || "")
                    ) {
                        return "images/[name]-[hash][extname]"; // 例: images/logo-abc123.png
                    }
                    // その他のアセットファイル（例: フォントなど）
                    return "[name]-[hash][extname]"; // 例: icon-abc123.woff
                },
                // JavaScriptのチャンクファイル名を指定
                chunkFileNames: "js/[name]-[hash].js", // 例: js/vendor-abc123.js
                // エントリーポイント（HTMLから参照されるJS）のファイル名を指定
                entryFileNames: "js/[name]-[hash].js", // 例: js/main-abc123.js
            },
        },
    },
});
