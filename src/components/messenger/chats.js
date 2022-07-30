import React from 'react'
import { Box } from '@mui/material'

const Chats = () => {
    const arr = Array.from(Array(10).keys())

    return (
        <Box sx={{ width: '45%', py: 20 }}>
            {arr.map((i, key) =>
                <Box
                    sx={{
                        height: '8vh',
                        minHeight: '70px',
                        maxHeight: '100px',
                        borderRadius: '10px',
                        boxShadow: '0px 2px 10px 4px rgba(0, 0, 0, 0.25)',
                        mt: 2,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-out',
                        textAlign: 'center',
                        ':hover': {
                            transform: 'translate(-20px)'
                        }
                    }}
                    key={key}
                    onClick={() => console.log(key)}
                >
                    sad
                </Box>
            )}
        </Box>
    )
}

export default Chats