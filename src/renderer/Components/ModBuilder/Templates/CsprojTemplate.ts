function buildCsproj(assemblies: {path: string; name: string; }[]) {
  return `
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netstandard2.1</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
${assemblies.map(ftr => getReferenceBlock(ftr)).join('\n')}
  </ItemGroup>

</Project>`.trim();
}

function getReferenceBlock(assemblyPath: {path: string; name: string; }) {
  return `
    <Reference Include="${assemblyPath.name}">
      <HintPath>${assemblyPath.path}</HintPath>
    </Reference>`;
}

export default buildCsproj;