interface DataPointProps {
  label: string;
  value: string | number;
  unit?: string;
  note?: string;
}

export default function DataPoint({ label, value, unit, note }: DataPointProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-slate-500 uppercase tracking-wide">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{value}</span>
        {unit && <span className="text-sm text-slate-500">{unit}</span>}
      </div>
      {note && <span className="text-xs text-slate-400">{note}</span>}
    </div>
  );
}
