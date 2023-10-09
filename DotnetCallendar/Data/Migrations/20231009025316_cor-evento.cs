using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DotnetCallendar.Data.Migrations
{
    public partial class corevento : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Cor",
                table: "Eventos",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cor",
                table: "Eventos");
        }
    }
}
