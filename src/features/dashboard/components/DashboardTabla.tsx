import { Pagination, Input, Table, Button, Tag, Space, Typography, Tooltip, Progress } from "antd";
import { table as mockTable } from '../data/TableData';
import type { Tabla } from "../interfaces/interfacesTabla";
import { SearchOutlined, FileExcelOutlined } from "@ant-design/icons";
import type { ColumnsType, FilterDropdownProps } from "antd/es/table/interface";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useRef, useState } from "react";

const { Text } = Typography;

const proyectosTotales = 37;

const semaforoColor = (valor: string) => {
  switch (valor.toLowerCase()) {
    case "verde":
      return "green";
    case "amarillo":
      return "gold";
    case "gris":
      return "grey";
    case "rojo":
      return "red";
    case "azul":
      return "blue";
    case "morado":
      return "purple";
    default:
      return "default";
  }
};


const searchFilter = (dataIndex: keyof Tabla): any => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }: FilterDropdownProps) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={`Buscar`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => confirm()}
        style={{ width: 188, marginBottom: 8, display: "block" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={() => confirm()} type="primary" size="small">
          Buscar
        </Button>
        <Button
          onClick={() => clearFilters?.()}
          type="default"
          size="small"
        >
          Limpiar
        </Button>
      </div>
    </div>
  ),
  filterIcon: () => <SearchOutlined />,
  onFilter: (value: string | number, record: Tabla) =>
    record[dataIndex]
      ?.toString()
      .toLowerCase()
      .includes(String(value).toLowerCase()),
});

const tagStyle = {
  border: "1px solid black",
  color: "black",
  backgroundColor: "white",
};

const columns: ColumnsType<Tabla> = [
  {
    title: "CLAVE",
    dataIndex: "clave",
    key: "clave",
    width: 120,
    ellipsis: true,
    ...searchFilter("clave"),
    sorter: (a, b) => a.clave.localeCompare(b.clave)
  },
  {
    title: "NOMBRE DEL PROYECTO",
    dataIndex: "nombre",
    key: "nombre",
    width: 220,
    ellipsis: true,
    ...searchFilter("nombre"),
    sorter: (a, b) => a.nombre.localeCompare(b.nombre)
  },
  {
    title: "SEMÁFORO",
    dataIndex: "semaforo",
    key: "semaforo",
    width: 130,
    render: (color: string) => (
      <Tag color={semaforoColor(color)}>{color.toUpperCase()}</Tag>
    ),
    sorter: (a, b) => a.semaforo.localeCompare(b.semaforo),
    filters: [
      { text: "VERDE", value: "Verde" },
      { text: "AMARILLO", value: "Amarillo" },
      { text: "ROJO", value: "Rojo" },
      { text: "GRIS", value: "Gris" },
      { text: "AZUL", value: "Azul" },
      { text: "MORADO", value: "Morado" },
    ],
    onFilter: (value: string | number | boolean, record: Tabla) =>
      record.semaforo === value,
  },
  {
    title: "ESTATUS",
    dataIndex: "estatus",
    key: "estatus",
    width: 120,
    ellipsis: true,
    render: (text) => <Tag style={tagStyle}>{text.toUpperCase()}</Tag>,
    sorter: (a, b) => a.estatus.localeCompare(b.estatus),
    filters: [
      { text: "ACTIVO", value: "Activo" },
      { text: "POR EMPEZAR", value: "Por empezar" },
      { text: "STAND BY ", value: "Stand by" },
      { text: "BUSINESS", value: "Business" },
      { text: "CANCELADO", value: "Cancelado" },
      { text: "TERMINADO", value: "Terminado" },
    ],
    onFilter: (value: string | number | boolean, record: Tabla) =>
      record.estatus === value,
  },
  {
    title: "EXITOSO",
    dataIndex: "exitoso",
    key: "exitoso",
    width: 120,
    ellipsis: true,
    render: (text) => <Tag style={tagStyle}>{text.toUpperCase()}</Tag>,
    sorter: (a, b) => a.exitoso.localeCompare(b.exitoso),
    filters: [
      { text: "EN PROCESO", value: "En proceso" },
      { text: "EXITOSO", value: "Exitoso" },
    ],
    onFilter: (value: string | number | boolean, record: Tabla) =>
      record.estatus === value,
  },
  {
    title: "AVANCE DEL PROYECTO",
    dataIndex: "avance",
    key: "avance",
    width: 200,
    ellipsis: true,
    render: (avance) => (
      <Tooltip title={`${avance}%`}>
        <Progress percent={avance} size="small" />
      </Tooltip>
    ),
    sorter: (a, b) => a.avance.localeCompare(b.avance),
  },
  {
    title: "LÍDER DE PROYECTO",
    dataIndex: "lider",
    key: "lider",
    width: 190,
    ellipsis: true,
    sorter: (a, b) => a.lider.localeCompare(b.lider),
    ...searchFilter("lider")
  },
  {
    title: "P.M.",
    dataIndex: "pm",
    key: "pm",
    width: 150,
    ellipsis: true,
    sorter: (a, b) => a.pm.localeCompare(b.pm),
    ...searchFilter("pm")
  },
  {
    title: "FECHA INICIAL",
    dataIndex: "fechaInicio",
    key: "fechaInicio",
    width: 150,
    ellipsis: true,
    ...searchFilter("fechaInicio")
  },
  {
    title: "FECHA FINAL",
    dataIndex: "fechaFin",
    key: "fechaFin",
    width: 140,
    ellipsis: true,
    ...searchFilter("fechaFin")
  },
  {
    title: "ORDEN DE COMPRA",
    dataIndex: "orden",
    key: "orden",
    width: 190,
    ellipsis: true,
    render: (text) => <Tag style={tagStyle}>{text.toUpperCase()}</Tag>,
    sorter: (a, b) => a.orden.localeCompare(b.orden),
    ...searchFilter("orden")
  },
  {
    title: "PAGADO",
    dataIndex: "pagado",
    key: "pagado",
    width: 120,
    ellipsis: true,
    render: (text) => <Tag style={tagStyle}>{text.toUpperCase()}</Tag>,
    filters: [
      { text: "PAGADO", value: "Pagado" },
      { text: "NO PAGADO", value: "No pagado" },
    ],
    onFilter: (value: string | number | boolean, record: Tabla) =>
      record.estatus === value,
  },
  {
    title: "HORAS",
    dataIndex: "horas",
    key: "horas",
    width: 100,
    ellipsis: true,
    sorter: (a, b) => a.horas - b.horas,
  },
  {
    title: "HORAS CONSUMIDAS",
    dataIndex: "consumidas",
    key: "consumidas",
    width: 160,
    ellipsis: true,
    sorter: (a, b) => a.consumidas - b.consumidas,
    render: (consumidas) => (
      <Tooltip title={`${consumidas}%`}>
        <Progress percent={consumidas} size="small" />
      </Tooltip>
    ),
  },
  {
    title: "",
    key: "accion",
    fixed: "right",
    width: 80,
    render: () => <Button type="default">ABRIR</Button>,
  },
];

export const DashboardTabla = () => {
  const [filteredData, setFilteredData] = useState(mockTable);
  //const tableRef = useRef<any>(null);

  const handleChange = (_pagination: any, _filters: any, _sorter: any, extra: any) => {
    setFilteredData(extra.currentDataSource);
  };

  /*const limpiarFiltros = () => {
    if (tableRef.current) {
      tableRef.current.reset(); 
    }
    setFilteredData(mockTable); 
    window.location.reload(); 
  };*/

  const exportarExcel = () => {
    const worksheetData = [
      ["REPORTE DE PROYECTOS"],
      [],
      Object.keys(filteredData[0]).map((key) =>
        key.toUpperCase().replace(/([A-Z])/g, " $1").trim()
      ),
      ...filteredData.map((item) => Object.values(item)),
    ];

    const ws = XLSX.utils.aoa_to_sheet(worksheetData);

    ws["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 13 } }];

    const range = XLSX.utils.decode_range(ws["!ref"]!);
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cell_address = { c: C, r: R };
        const cell_ref = XLSX.utils.encode_cell(cell_address);

        if (!ws[cell_ref]) continue;

        if (R === 0) {
          ws[cell_ref].s = {
            font: { bold: true, sz: 16 },
            alignment: { horizontal: "center" },
          };
        } else if (R === 2) {
          ws[cell_ref].s = {
            font: { bold: true },
            fill: {
              patternType: "solid",
              fgColor: { rgb: "D9D9D9" },
            },
            border: {
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
            },
          };
        } else if (R > 2) {
          ws[cell_ref].s = {
            border: {
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
            },
          };
        }
      }
    }

    const colWidths = Object.keys(filteredData[0]).map((_, i) => {
      const maxLength = Math.max(
        ...filteredData.map((item) =>
          (item as any)[Object.keys(item)[i]].toString().length
          //corregir despues
        ),
        Object.keys(filteredData[0])[i].length
      );
      return { wch: maxLength + 2 };
    });
    ws["!cols"] = colWidths;

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Reporte Proyectos");

    const excelBuffer = XLSX.write(wb, {
      bookType: "xlsx",
      type: "array",
      cellStyles: true,
    });

    const data = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(data, "Reporte_Proyectos.xlsx");
  };


  return (
    <div style={{ width: "60%", overflowX: "auto" }}>
      <div
        style={{
          margin: "90px 16px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Text strong>PROYECTOS TOTALES: {proyectosTotales}</Text>
        <Space>
          <Button>LIMPIAR FILTROS</Button>
          <Button onClick={exportarExcel} icon={<FileExcelOutlined />}>
            EXPORTAR
          </Button>
        </Space>
      </div>
      <Table
        columns={columns}
        dataSource={mockTable}
        scroll={{ x: 2000 }}
        pagination={false}
        size="middle"
        rowClassName={() => "compact-row"}
        bordered
        onChange={handleChange}
      />
      <style>{`
      .compact-row td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5;
        height: 40px;
        vertical-align: middle;
      }
    `}</style>
      <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
        <Pagination current={1} total={37} pageSize={5} />
      </div>
    </div>
  );
};
