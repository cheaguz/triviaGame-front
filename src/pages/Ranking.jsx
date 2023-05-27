import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getRanking } from '../Services/api';
import { TableContainer, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react';

export const Ranking = () => {
    const [ranking, setRanking] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getRanking()
            .then(res => {
                setRanking(res.data.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {loading ? <p>Loading...</p> :
                <>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>User</Th>
                                    <Th>Points</Th>
                                    <Th isNumeric>Best time</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {ranking.map((rank, i) => (
                                    <Tr key={i}>
                                        <Td>{rank.id_user.user}</Td>
                                        <Td>{rank.points}</Td>
                                        <Td isNumeric>{rank.best_time}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </>
            }

        </motion.div>
    )
}
