// Articleインターフェース: 記事データの形式を定義
interface Article {
  link: string;             // 記事へのリンク
  img: string;              // 記事の画像のURL
  tag: string;              // 記事のタグ
  headline: string;         // 記事の見出し
  description: string;      // 記事の説明文
  dataPublished: string;    // 記事の公開日
}

// ArticleRendererクラス: 記事データをHTML要素としてレンダリングするクラス
class ArticleRenderer {
  private articles: Article[];  // レンダリングする記事データの配列

  // コンストラクタ: 記事データを受け取り、プロパティに格納
  constructor(articles: Article[]) {
    this.articles = articles;
  }

  /**
   * renderArticles: 記事データをHTML要素としてレンダリング
   * @param container - 記事を追加するコンテナのHTML要素
   */
  renderArticles(container: HTMLElement): void {
    const articleContainer = container.querySelector('.article') as HTMLElement;

    if (articleContainer) {
      this.articles.forEach((article) => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article__item');

        const imgSrc = article.img.trim();

        const shortenedDescription = this.truncateDescription(article.description, 32);

        articleElement.innerHTML = `
          <a href="${article.link}">
            <section class="article__item__section">
              ${this.generateImageHTML(imgSrc, article.tag)}
              <div class="article__item__section__text">
                ${this.generateHeadlineHTML(article.headline)}
                ${this.generateDescriptionHTML(shortenedDescription)}
                ${this.generateDataPublishedHTML(article.dataPublished)}
              </div>
            </section>
          </a>
        `;

        articleContainer.appendChild(articleElement);
      });
    }
  }

  // 説明文を指定した文字数で切り詰めるユーティリティ関数
  private truncateDescription(description: string, maxLength: number): string {
    if (description.length <= maxLength) {
      return description;
    }

    const truncatedText = description.substring(0, maxLength - 3).trim() + '...';
    return truncatedText;
  }

  // generateImageHTML: 画像のHTMLを生成
  private generateImageHTML(imgSrc: string, tag: string): string {
    // Assuming imgSrc is the path provided in the article.json
    const fullPath = `https://yocci7-blog.vercel.app/img/article/${imgSrc}`;
    return `
      <img class="article__item__section__img" src="${fullPath}"/>
      <p class="article__item__section__tag">${tag}</p>
    `;
  }

  // generateHeadlineHTML: 見出しのHTMLを生成
  /**
   * @param headline - 見出しのテキスト
   * @returns 見出しのHTML要素
   */
  private generateHeadlineHTML(headline: string): string {
    return headline.trim() !== '' ? `<h4 class="article__item__section__text__headline">${headline}</h4>` : '';
  }

  // generateDescriptionHTML: 説明文のHTMLを生成
  /**
   * @param description - 説明文のテキスト
   * @returns 説明文のHTML要素
   */
  private generateDescriptionHTML(description: string): string {
    return description.trim() !== '' ? `<p class="article__item__section__text__description">${description}</p>` : '';
  }

  // generateDataPublishedHTML: 公開日のHTMLを生成
  /**
   * @param dataPublished - 公開日のテキスト
   * @returns 公開日のHTML要素
   */
  private generateDataPublishedHTML(dataPublished: string): string {
    return dataPublished.trim() !== '' ? `<p class="article__item__section__text__dataPublished">${dataPublished}</p>` : '';
  }
}

export default ArticleRenderer;
