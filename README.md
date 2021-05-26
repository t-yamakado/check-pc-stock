# What is
欲しいPCの在庫状況を監視するツールです。

# 利用ツール
- Cypress
- Slack API
  - chat.postMessage
- GitHub Actions
- TypeScript(このレポジトリに置いては恩恵0)

# その他
- GitHub Actionsを使ってみたくて、main.ymlに機能を詰め込みすぎました
- 本当はスケジューラーとしてGitHub Actionsを使い、エラーハンドリングはアプリ側でやるべき
  - 現状在庫がないとpipelineが失敗するいけてない構成になっている