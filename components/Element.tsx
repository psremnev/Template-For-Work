import './Element.less';
import { List, ListItem, ListItemText, ListSubheader, Box } from '@mui/material'

const data = [{

}]

export default function Element() {
  return (
    <List sx={{ display: 'flex' }}>
      {[1, 2, 3].map((value) => (
        <ListItem key={value} sx={{ display: 'flex', flexDirection: 'column',height: 2400 }}>
          <ListSubheader>Date</ListSubheader>
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            {[1, 2, 3].map((value) => (
              <ListItem key={value} sx={{ height: 100, bgcolor: '#8250df' }}>
                <ListItemText primary={`Line item ${value}`} />
              </ListItem>
            ))}
          </List>
        </ListItem>
      ))}
    </List>
  )
}
