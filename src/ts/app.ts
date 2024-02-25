// ArticleRendererモジュールをインポート
import ArticleRenderer from './article';

// RecentArticleRendererモジュールをインポート
// import RecentArticleRenderer from './sidebar_recentArticle';

// 記事データを含むJSONファイルをインポート
import articles from '../json/article.json';

// DOMContentLoadedイベントが発火したときに実行
document.addEventListener('DOMContentLoaded', () => {
  // ArticleRendererクラスのインスタンスを作成し、記事データを渡す
  const articleRenderer = new ArticleRenderer(articles);

  // 記事コンテナのHTML要素を取得
  const mainContainer = document.querySelector('.main') as HTMLElement;

  // 記事コンテナが存在する場合
  if (mainContainer) {
    // ArticleRendererによって最新の記事をレンダリングする
    articleRenderer.renderArticles(mainContainer);
  }

// ---------------------------------------------------------------------

  // // RecentArticleRendererクラスのインスタンスを作成し、記事データを渡す
  // const recentArticleRenderer = new RecentArticleRenderer(articles);

  // // サイドバーコンテナのHTML要素を取得
  // const sidebarContainer = document.querySelector('.sidebar') as HTMLElement;

  // // サイドバーコンテナが存在する場合
  // if (sidebarContainer) {
  //   // RecentArticleRendererによって最新の記事をレンダリングする
  //   recentArticleRenderer.renderArticles(sidebarContainer);
  // }
});
