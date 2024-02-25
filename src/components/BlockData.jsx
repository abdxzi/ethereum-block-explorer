import { useEffect, useState } from "react";
import { getBlockByNumber, getTransactionsOfBlock, hexToWei } from './utils';


import "./BlockData.css"

function BlockData({ block, setBlock }) {

    const [blockData, setBlockData] = useState({});
    const [trans, setTrans] = useState(undefined);

    const loadTransactions = async () => {
        const bloc = await getTransactionsOfBlock(block);
        console.log(bloc.transactions)
        setTrans(bloc.transactions);
    }

    useEffect(() => {
        const getBlock = async () => {
            const x = await getBlockByNumber(block);
            setBlockData(x);
            setTrans(undefined);
            if (!block) {
                setBlock(x.number)
            }
        };

        getBlock();
    }, [block]);

    return (
        <>
        {/* <button onClick={}>Cliiiiiiick</button> */}
            <div className="block-search flex flex-col">
                <h3>Block data</h3>
                <div className="block-table">
                    <table>
                        <tbody>
                            <tr>
                                <td>Block Number</td>
                                <td>{blockData?.number}</td>
                            </tr>
                            <tr>
                                <td>Dificulty</td>
                                <td>{blockData?.difficulty}</td>
                            </tr>
                            <tr>
                                <td>Mined By</td>
                                <td>{blockData?.miner}</td>
                            </tr>
                            <tr>
                                <td>Previous Block Hash</td>
                                <td>{blockData?.parentHash}</td>
                            </tr>
                            <tr>
                                <td>Block Hash</td>
                                <td>{blockData?.hash}</td>
                            </tr>
                            <tr>
                                <td>Nonce</td>
                                <td>{blockData?.nonce}</td>
                            </tr>
                            <tr>
                                <td>Timestamp</td>
                                <td>{blockData?.timestamp}  ({new Date(blockData?.timestamp * 1000).toDateString()})</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="transactions">
                {
                    !trans ?
                        <span className="transactions-trigger" onClick={loadTransactions}>See transactions of this block</span> :
                        trans.length > 0 ? 
                        <>
                        <h3>Transactions</h3>
                        <br></br>
                        <div className="transactions-table">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Txn Hash</td>
                                        <td>value</td>
                                        <td>from</td>
                                        <td>to</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        trans.map(
                                            (transaction, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{transaction.hash}</td>
                                                        <td>{hexToWei(transaction.value._hex) + " "} ETH</td>
                                                        <td>{transaction.from}</td>
                                                        <td>{transaction.to}</td>
                                                    </tr>
                                                )
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        </>: <div>No transactions in this block</div>
                }


            </div>
        </>
    );
}

export default BlockData;