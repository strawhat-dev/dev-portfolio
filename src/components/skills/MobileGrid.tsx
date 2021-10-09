import { Grid } from '@mui/material';
import { skills, SkillItem } from '@/components/skills/SkillItems';

export const MobileGrid = () => {
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
          <Grid key={i} item xs={5}>
            <SkillItem key={i} label={x} />
          </Grid>
        ))}
    </Grid>
  );
};
