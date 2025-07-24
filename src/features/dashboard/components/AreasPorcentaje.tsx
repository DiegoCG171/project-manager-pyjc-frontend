import { Pie } from "@ant-design/plots";

interface Props {
  porcentaje: number;
}

export const AreasPorcentaje = ({ porcentaje }: Props) => {
  const config = {
  data: [
    { type: 'completado', value: porcentaje, color: '#207c84' },
    { type: 'pendiente', value: 100 - porcentaje, color: '#aabdbb' },
  ],
  angleField: 'value',
  colorField: 'color',
  scale: {
    color: {
      type: 'identity',
    },
  },
  innerRadius: 0.7,
  legend: false,
  label: false,
  annotations: [
    {
      type: 'text',
      style: {
        text: `${porcentaje}%`,
        x: '50%',
        y: '50%',
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'bold',
      },
    },
  ],
  height: 120,
  width: 120,
  autoFit: false,
  tooltip: false,
};

  return <Pie {...config} />;
};
