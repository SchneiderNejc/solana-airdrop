const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMORTS_PER_SOL
} = require("@solana/web3.js")

const wallet = new Keypair()

const publicKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey
//---------------Funcion Exec----------------------
main()
