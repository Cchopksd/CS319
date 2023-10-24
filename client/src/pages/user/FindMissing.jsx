import React from "react";
import { ImageList, ImageListItem, Typography } from '@mui/material';
import { stockData } from "../../demo/data";

const FindMissing = () => {
    return (
        <div>
            <div>
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                    Find Missing
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Find missing items in your collection
                </Typography>
            </div>
        </div>
    );
};

export default FindMissing;
