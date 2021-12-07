import {Paper, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';

const Reviews = ({ comments, clickDeleteBtnt }) => {
  return (
    <Paper sx={{ my: 2, mx: 'auto', p: 2, maxWidth: 400, flexGrow: 1 }}>
      <Typography sx={{ textAlign: 'left', m: 1 }} variant='h6' component='h1'>
        Отзывы
      </Typography>
      <List>
        {comments.map((comment, i) => (
          <ListItem
            key={i}
            secondaryAction={
              <IconButton edge='end' aria-label='delete' onClick={(key) => clickDeleteBtnt(i)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={comment.fullName} secondary={comment.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Reviews;
