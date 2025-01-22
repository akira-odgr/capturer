import { CSSProperties, FC } from "react";
import BlogImage from "../../assets/images/blog.jpg";

import "./Blog.scss";

const backgroundImg: CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${BlogImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

export const Blog: FC = () => {
    return (
        <section className="blog" style={backgroundImg}>
            <div className="blog__container">
                <div className="blog__content">
                    <h2 className="blog__content__title">latest blog</h2>
                    <h4>Capturing Emotion in Every Frame</h4>
                    <p>
                        このブログ記事では、写真撮影におけるストーリーテリングの重要性を掘り下げます。
                        このブログ記事では、写真撮影におけるストーリーテリングの重要性と、Capturerがどのように感情や物語を作品に
                        どのようにアプローチしているのか。読者は、プロのフォトグラファーが感情を呼び起こすために
                        プロのフォトグラファーが感情を呼び起こし、意味を伝え
                        意味を伝え、見る人の心に深く響く魅力的なビジュアル・ナラティブを
                        深いレベルで見る人の心に響きます。
                    </p>
                    <div className="blog__content__btn">
                        <button className="btn">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
