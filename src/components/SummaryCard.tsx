import { Card, CardContent, Typography } from "@mui/material";

const SummaryCard = ({ title, value }: { title: string; value: number }) => {
  return (
    <Card className="rounded-xl shadow-sm">
      <CardContent>
        <Typography className="text-gray-500 text-sm">{title}</Typography>
        <Typography className="text-2xl font-bold text-[#232360]">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
