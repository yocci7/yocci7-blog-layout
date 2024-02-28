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

        const imgSrc = article.img.trim() !== '' ? article.img : 'https://placehold.jp/256x144.png';

        const shortenedDescription = this.truncateDescription(article.description, 40);

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

  // 単語で指定した文字数で切り詰めるユーティリティ関数
  private truncateDescription(description: string, maxLength: number): string {
    const words = description.split(' ');
    let truncatedDescription = '';

    for (const word of words) {
      if ((truncatedDescription + word).length <= maxLength) {
        truncatedDescription += ` ${word}`;
      } else {
        break;
      }
    }

    return truncatedDescription.trim() + '...';
  }

  // generateImageHTML: 画像のHTMLを生成
  private generateImageHTML(imgSrc: string): string {
    // Assuming imgSrc is the path provided in the article.json
    const fullPath = `https://yocci7-blog.vercel.app/img/article/${imgSrc}`;
    return `<img class="recentArticle__item__section__img" src="${fullPath}"/>`;
  }

  // generateHeadlineHTML: 見出しのHTMLを生成
  private generateHeadlineHTML(headline: string): string {
    return headline.trim() !== '' ? `<h4 class="recentArticle__item__section__text__headline">${headline}</h4>` : '';
  }

  // generateDescriptionHTML: 説明文のHTMLを生成
  private generateDescriptionHTML(description: string): string {
    return description.trim() !== '' ? `<p class="recentArticle__item__section__text__description">${description}</p>` : '';
  }
}

export default RecentArticleRenderer;
