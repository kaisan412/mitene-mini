# mitene-mini

画像や動画を特定の人と共有できるアプリ「みてね」のミニバージョンを、学習目的で制作したプロジェクトです。

## プロジェクト概要

このアプリは、家族や友人など特定の相手と写真や動画を共有する体験を簡易的に再現することを目標にしています。

## 目的

- フロントエンドとバックエンドを分けて開発する流れを体験する
- React / TypeScript / FastAPI などの構成で小さなWebアプリを作る
- 画像共有アプリに必要な基本的な画面構成やAPI連携を学ぶ

## 使用技術

- フロントエンド: React, TypeScript, Vite
- バックエンド: FastAPI
- 開発環境: Node.js, Python

## フォルダ構成

```text
mitene-mini/
├── backend/
│   └── main.py
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
└── README.md
```

## 現在の実装内容

- バックエンドで写真データを返す簡易APIを実装
- フロントエンドで React アプリを起動できる構成に対応

## 今後の予定

- 画像一覧表示
- ユーザーごとの共有機能
- 画面デザインの改善
- APIとの連携強化

