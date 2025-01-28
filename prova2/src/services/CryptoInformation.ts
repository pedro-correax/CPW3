type CryptoInfo = {
    name: string;
    ticker: string;
    networkType: string;
};

const cryptocurrencies: CryptoInfo[] = [
    { name: 'Bitcoin', ticker: 'btc', networkType: 'Padrão' },
    { name: 'Bitcoin Cash', ticker: 'bch', networkType: 'Padrão' },
    { name: 'Litecoin', ticker: 'ltc', networkType: 'Padrão' },
    { name: 'Dogecoin', ticker: 'doge', networkType: 'Padrão' },
    { name: 'Ethereum (ERC20)', ticker: 'eth', networkType: 'ERC20' },
    { name: '1INCH Token', ticker: 'erc20/1inch', networkType: 'ERC20' },
    { name: 'Arbitrum', ticker: 'erc20/arb', networkType: 'ERC20' },
    { name: 'Binance Coin', ticker: 'erc20/bnb', networkType: 'ERC20' },
    { name: 'Dai Token', ticker: 'erc20/dai', networkType: 'ERC20' },
    { name: 'EURC', ticker: 'erc20/eurc', networkType: 'ERC20' },
    { name: 'EURt', ticker: 'erc20/eurt', networkType: 'ERC20' },
    { name: 'ChainLink Token', ticker: 'erc20/link', networkType: 'ERC20' },
    { name: 'Maker', ticker: 'erc20/mkr', networkType: 'ERC20' },
    { name: 'NEXO', ticker: 'erc20/nexo', networkType: 'ERC20' },
    { name: 'PEPE Token', ticker: 'erc20/pepe', networkType: 'ERC20' },
    { name: 'PayPal USD', ticker: 'erc20/pyusd', networkType: 'ERC20' },
    { name: 'SHIBA INU', ticker: 'erc20/shib', networkType: 'ERC20' },
    { name: 'True USD', ticker: 'erc20/tusd', networkType: 'ERC20' },
    { name: 'USD Coin', ticker: 'erc20/usdc', networkType: 'ERC20' },
    { name: 'Pax Dollar', ticker: 'erc20/usdp', networkType: 'ERC20' },
    { name: 'USDT', ticker: 'erc20/usdt', networkType: 'ERC20' },
    { name: 'Verse', ticker: 'erc20/verse', networkType: 'ERC20' },
    { name: 'TRX', ticker: 'trx', networkType: 'Padrão' },
    { name: '1INCH Token', ticker: 'bep20/1inch', networkType: 'BEP20' },
    { name: 'Cardano', ticker: 'bep20/ada', networkType: 'BEP20' },
    { name: 'BNB', ticker: 'bep20/bnb', networkType: 'BEP20' },
    { name: 'BTCB', ticker: 'bep20/btcb', networkType: 'BEP20' },
    { name: 'PancakeSwap', ticker: 'bep20/cake', networkType: 'BEP20' },
    { name: 'Dai Token', ticker: 'bep20/dai', networkType: 'BEP20' },
    { name: 'Dogecoin', ticker: 'bep20/doge', networkType: 'BEP20' },
    { name: 'ETH', ticker: 'bep20/eth', networkType: 'BEP20' },
    { name: 'Injective Protocol', ticker: 'bep20/inj', networkType: 'BEP20' },
    { name: 'LTC', ticker: 'bep20/ltc', networkType: 'BEP20' },
    { name: 'PHPt', ticker: 'bep20/phpt', networkType: 'BEP20' },
    { name: 'SHIBA INU', ticker: 'bep20/shib', networkType: 'BEP20' },
    { name: 'Transhuman Coin', ticker: 'bep20/thc', networkType: 'BEP20' },
    { name: 'USDC', ticker: 'bep20/usdc', networkType: 'BEP20' },
    { name: 'USDT', ticker: 'bep20/usdt', networkType: 'BEP20' },
    { name: 'XRP', ticker: 'bep20/xrp', networkType: 'BEP20' },
    { name: 'Arbitrum', ticker: 'arbitrum/arb', networkType: 'Arbitrum' },
    { name: 'Dai Token', ticker: 'arbitrum/dai', networkType: 'Arbitrum' },
    { name: 'Ethereum', ticker: 'arbitrum/eth', networkType: 'Arbitrum' },
    { name: 'ChainLink Token', ticker: 'arbitrum/link', networkType: 'Arbitrum' },
    { name: 'PEPE Token', ticker: 'arbitrum/pepe', networkType: 'Arbitrum' },
    { name: 'USD Coin (Native)', ticker: 'arbitrum/usdc', networkType: 'Arbitrum' },
    { name: 'USD Coin (Bridged)', ticker: 'arbitrum/usdc.e', networkType: 'Arbitrum' },
    { name: 'USDT', ticker: 'arbitrum/usdt', networkType: 'Arbitrum' },
    { name: 'Wrapped BTC', ticker: 'arbitrum/wbtc', networkType: 'Arbitrum' },
    { name: 'AVAX', ticker: 'avax-c/avax', networkType: 'AVAX-C' },
    { name: 'Bitcoin', ticker: 'avax-c/btc.b', networkType: 'AVAX-C' },
    { name: 'EURC', ticker: 'avax-c/eurc', networkType: 'AVAX-C' },
    { name: 'USD Coin (Native)', ticker: 'avax-c/usdc', networkType: 'AVAX-C' },
    { name: 'USD Coin (Bridged)', ticker: 'avax-c/usdc.e', networkType: 'AVAX-C' },
    { name: 'USDT', ticker: 'avax-c/usdt', networkType: 'AVAX-C' },
    { name: 'Wrapped AVAX', ticker: 'avax-c/wavax', networkType: 'AVAX-C' },
    { name: 'Wrapped BTC', ticker: 'avax-c/wbtc.e', networkType: 'AVAX-C' },
    { name: 'Wrapped Ether', ticker: 'avax-c/weth.e', networkType: 'AVAX-C' },
    { name: 'Avalanche Token', ticker: 'polygon/avax', networkType: 'Polygon' },
    { name: 'Decentraland', ticker: 'polygon/mana', networkType: 'Polygon' },
    { name: 'POL', ticker: 'polygon/pol', networkType: 'Polygon' },
    { name: 'USD Coin (Native)', ticker: 'polygon/usdc', networkType: 'Polygon' },
    { name: 'USD Coin (Bridged)', ticker: 'polygon/usdc.e', networkType: 'Polygon' },
    { name: 'USDT', ticker: 'polygon/usdt', networkType: 'Polygon' },
    { name: 'Wrapped BTC', ticker: 'polygon/wbtc', networkType: 'Polygon' },
    { name: 'Wrapped Ether', ticker: 'polygon/weth', networkType: 'Polygon' },
    { name: 'Dai Token', ticker: 'optimism/dai', networkType: 'Optimism' },
    { name: 'Ethereum', ticker: 'optimism/eth', networkType: 'Optimism' },
    { name: 'ChainLink Token', ticker: 'optimism/link', networkType: 'Optimism' },
    { name: 'Optimism', ticker: 'optimism/op', networkType: 'Optimism' },
    { name: 'USD Coin (Native)', ticker: 'optimism/usdc', networkType: 'Optimism' },
    { name: 'USD Coin (Bridged)', ticker: 'optimism/usdc.e', networkType: 'Optimism' },
    { name: 'USDT', ticker: 'optimism/usdt', networkType: 'Optimism' },
    { name: 'Wrapped BTC', ticker: 'optimism/wbtc', networkType: 'Optimism' },
    { name: 'Dai Token', ticker: 'base/dai', networkType: 'Base' },
    { name: 'Ethereum', ticker: 'base/eth', networkType: 'Base' },
    { name: 'EURC', ticker: 'base/eurc', networkType: 'Base' },
    { name: 'USD Coin', ticker: 'base/usdc', networkType: 'Base' },
    { name: 'EURC', ticker: 'sol/eurc', networkType: 'Solana' },
    { name: 'Solana', ticker: 'sol/sol', networkType: 'Solana' },
    { name: 'Trump', ticker: 'sol/trump', networkType: 'Solana' },
    { name: 'USDC', ticker: 'sol/usdc', networkType: 'Solana' },
    { name: 'USDT', ticker: 'sol/usdt', networkType: 'Solana' },
    { name: 'Wrapped BTC', ticker: 'sol/wbtc', networkType: 'Solana' },
    { name: 'Wrapped Ether (Wormhole)', ticker: 'sol/weth', networkType: 'Solana' },
    { name: 'BTC', ticker: 'trc20/btc', networkType: 'TRON' },
    { name: 'INRT', ticker: 'trc20/inrt', networkType: 'TRON' },
    { name: 'TrueUSD', ticker: 'trc20/tusd', networkType: 'TRON' },
    { name: 'Decentralized USD', ticker: 'trc20/usdd', networkType: 'TRON' },
    { name: 'USDT', ticker: 'trc20/usdt', networkType: 'TRON' },
];

export default cryptocurrencies;
