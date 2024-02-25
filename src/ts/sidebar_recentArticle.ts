// Articleインターフェース: 記事データの形式を定義
interface Article {
  link: string;             // 記事へのリンク
  img: string;              // 記事の画像のURL
  headline: string;         // 記事の見出し
  dataPublished: string;    // 記事の公開日
}

// RecentArticleRendererクラス: 記事データをHTML要素としてレンダリングするクラス
class RecentArticleRenderer {
  private articles: Article[];  // レンダリングする記事データの配列

  // コンストラクタ: 記事データを受け取り、プロパティに格納
  constructor(articles: Article[]) {
    // 上から3つの記事データのみを抽出して格納
    this.articles = articles.slice(0, 3);
  }

  /**
   * renderArticles: 記事データをHTML要素としてレンダリング
   * @param container - 記事を追加するコンテナのHTML要素
   */
  renderArticles(container: HTMLElement): void {
    const recentArticleContainer = container.querySelector('.recentArticle') as HTMLElement;

    if (recentArticleContainer) {
      this.articles.forEach((article) => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('recentArticle__item');

        const imgSrc = article.img.trim() !== '' ? article.img : 'https://placehold.jp/256x144.png';

        articleElement.innerHTML = `
          <div class="recentArticle__item__contents">
            <a href="${article.link}">
              <section class="recentArticle__item__contents__section">
                ${this.generateImageHTML(imgSrc)}
                <div class="recentArticle__item__contents__section__text">
                  ${this.generateHeadlineHTML(article.headline)}
                  ${this.generateDataPublishedHTML(article.dataPublished)}
                </div>
              </section>
            </a>
          </div>
        `;

        recentArticleContainer.appendChild(articleElement);
      });
    }
  }

  // generateImageHTML: 画像のHTMLを生成
  /**
   * @param imgSrc - 画像のURL
   * @returns 画像のHTML要素
   */
  private generateImageHTML(imgSrc: string): string {
    return `<img class="recentArticle__item__contents__section__img" src="../../${imgSrc}"/>`;
  }

  // generateHeadlineHTML: 見出しのHTMLを生成
  /**
   * @param headline - 見出しのテキスト
   * @returns 見出しのHTML要素
   */
  private generateHeadlineHTML(headline: string): string {
    return headline.trim() !== '' ? `<h4 class="recentArticle__item__contents__section__text__headline">${headline}</h4>` : '';
  }

  // generateDataPublishedHTML: 公開日のHTMLを生成
  /**
   * @param dataPublished - 公開日のテキスト
   * @returns 公開日のHTML要素
   */
  private generateDataPublishedHTML(dataPublished: string): string {
    return dataPublished.trim() !== '' ? `<p class="recentArticle__item__contents__section__text__dataPublished">${dataPublished}</p>` : '';
  }
}

export default RecentArticleRenderer;
