// Articleインターフェース: 記事データの形式を定義
interface Article {
  link: string;         // 記事へのリンク
  img: string;          // 記事の画像のURL
  headline: string;     // 記事の見出し
  description: string;  // 記事の説明文
}

// RecentArticleRendererクラス: 記事データをHTML要素としてレンダリングするクラス
class RecentArticleRenderer {
  private articles: Article[]; // レンダリングする記事データの配列

  constructor(articles: Article[]) {
    this.articles = articles.slice(0, 3); // 上から3つの記事のみを取得
  }

  /**
   * renderArticles: 記事データをHTML要素としてレンダリング
   * @param container - 記事を追加するコンテナのHTML要素
   */
  renderArticles(container: HTMLElement): void {
    const articleContainer = container.querySelector('.recentArticle') as HTMLElement;

    if (articleContainer) {
      this.articles.forEach((article) => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('recentArticle__item');

        const imgSrc = article.img.trim();

        const shortenedDescription = this.truncateDescription(article.description, 24);

        articleElement.innerHTML = `
          <a href="${article.link}">
            <section class="recentArticle__item__section">
              ${this.generateImageHTML(imgSrc)}
              <div class="recentArticle__item__section__text">
                ${this.generateHeadlineHTML(article.headline)}
                ${this.generateDescriptionHTML(shortenedDescription)}
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

  // 画像のHTMLを生成
  private generateImageHTML(imgSrc: string): string {
    // imgSrcはarticle.jsonで提供されたパスと仮定しています
    const fullPath = `https://yocci7-blog.vercel.app/img/article/${imgSrc}`;
    return `<img class="recentArticle__item__section__img" src="${fullPath}"/>`;
  }

  // 見出しのHTMLを生成
  private generateHeadlineHTML(headline: string): string {
    return headline.trim() !== '' ? `<h4 class="recentArticle__item__section__text__headline">${headline}</h4>` : '';
  }

  // 説明文のHTMLを生成
  private generateDescriptionHTML(description: string): string {
    return description.trim() !== '' ? `<p class="recentArticle__item__section__text__description">${description}</p>` : '';
  }
}

export default RecentArticleRenderer;
