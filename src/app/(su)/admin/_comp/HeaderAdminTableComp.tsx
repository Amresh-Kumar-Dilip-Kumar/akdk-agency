export default function HeaderAdminTables(
  { title, description, RightSideComp }:{
    title: string;
    description: string;
    RightSideComp: React.ReactNode;
  }
){
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex gap-2">
          {RightSideComp}
        </div>
      </div>

  )
}