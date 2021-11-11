export const MarketSidebarData = {
    status: {
      title: '상태',
      toggles: [
        {
          title: '지금 구매하기',
          value: 'BUY_NOW',
        },
        {
          title: '경매 중',
          value: 'ON_AUCTION',
        },
        {
          title: '신작',
          value: 'IS_NEW',
        },
        {
          title: '오퍼 있음',
          value: 'HAS_OFFER',
        },
      ],
    },
    value: {
      title: '가격',
      type: [
        {
          title: '(USD)',
          value: 'USD',
        },
        {
          title: '(ETH)',
          value: 'ETH',
        },
      ],
      value: {
        min: '',
        max: '',
      },
    },
    collections: {
      title: '컬렉션',
      filter: '',
    },
    chains: {
      title: 'Chains',
      list: [
        {
          title: 'Ethereum',
          image: '',
        },
        {
          title: 'Klaytn',
          image: '',
        },
      ],
    },
    categories: {
      title: 'Categories',
      now: '',
      list: [
        {
          title: 'Art',
          value: 'art',
          image: '',
        },
        {
          title: 'Music',
          value: 'music',
          image: '',
        },
        {
          title: 'Domain Names',
          value: 'domain-names',
          image: '',
        },
        {
          title: 'Virtual Worlds',
          value: 'virtual-worlds',
          image: '',
        },
        {
          title: 'Trading Cards',
          value: 'trading-cards',
          image: '',
        },
        {
          title: 'Collectibles',
          value: 'collectibles',
          image: '',
        },
        {
          title: 'Sports',
          value: 'sports',
          image: '',
        },
        {
          title: 'Utility',
          value: 'utility',
          image: '',
        },
      ],
    },
    onSales: {
      title: '판매 중',
      filter: '',
    },
  };
  