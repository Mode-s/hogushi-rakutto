export const siteConfig = {
  name: "ほぐし処らくっと",
  title: "ほぐし処らくっと | 会津若松のもみほぐし・リラクゼーションサロン",
  description:
    "福島県会津若松市のプライベートリラクゼーションサロン「ほぐし処らくっと」。もみほぐし・ヘッドケア・リフレクソロジーで心と身体をリラックス。会津若松駅より徒歩23分、駐車場3台完備。",
  // 本番公開時は実際のドメインに変更してください
  url: "https://example.com",
  ogImage: "/ogp.png",
  ogImageAlt: "ほぐし処らくっと リラクゼーションサロン",
  lang: "ja",
  locale: "ja_JP",
  themeColor: "#fffbea",
  keywords: [
    "ほぐし処らくっと",
    "会津若松",
    "もみほぐし",
    "リラクゼーション",
    "マッサージ",
    "ヘッドケア",
    "リフレクソロジー",
    "福島県",
    "八角町",
  ],
  business: {
    telephone: "0242-93-7248",
    priceRange: "¥¥",
    address: {
      postalCode: "965-0009",
      region: "福島県",
      locality: "会津若松市",
      streetAddress: "八角町13-45",
      country: "JP",
    },
    geo: {
      latitude: 37.5040301,
      longitude: 139.9467967,
    },
    openingHours: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:00", closes: "21:00" },
    ],
  },
  sns: {
    instagram: "https://www.instagram.com/hogushichurakutsuto?igsh=dzFkdXdyb3U5Zmhs",
  },
} as const;
