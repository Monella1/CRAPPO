
import { createTheme } from "@mui/material";
export const theme = createTheme({
      typography: {
            h3: {
              fontSize: 18,
            },
            h2: {
              fontSize: 22,
              fontWeight:600
            },
            h1: {
              fontSize: 48,
            },
            p: {
                  fontSize: 16,
            },
      },
      
      components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h1: 'h1',
              h2: 'h2',
              h3: 'h3',
              h4: 'h4',
              h5: 'h5',
              h6: 'h6',
              subtitle1: 'h2',
              subtitle2: 'h2',
              body1: 'span',
              body2: 'span',
              p: 'p'
            },
          },
        },
      },
    });
    