import { Grid } from '@mui/material';
import { skills, SkillItem } from '@/components/skills/SkillItems';

export const MobileGrid = () => {
  const classNames = ['ani-right', 'ani-left'];

  return (
    <Grid
      justifyContent="space-around"
      spacing={3}
      paddingBottom="10%"
      container
    >
      {Object.values(skills)
        .flat()
        .map((x, i) => (
          <Grid
            className={
              classNames[Math.floor(Math.random() * classNames.length)]
            }
            key={i}
            xs={5}
            item
          >
            <SkillItem key={i} label={x} />
          </Grid>
        ))}
    </Grid>
  );
};
