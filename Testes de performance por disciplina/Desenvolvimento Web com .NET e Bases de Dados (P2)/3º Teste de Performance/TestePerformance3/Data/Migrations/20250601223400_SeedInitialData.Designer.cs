﻿// <auto-generated />
using CityBreaks.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CityBreaks.Data.Migrations
{
    [DbContext(typeof(CityBreaksContext))]
    [Migration("20250601223400_SeedInitialData")]
    partial class SeedInitialData
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.5");

            modelBuilder.Entity("CityBreaks.Models.City", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("CityName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("CountryId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("CountryId");

                    b.ToTable("Cities");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CityName = "Rio de Janeiro",
                            CountryId = 1
                        },
                        new
                        {
                            Id = 2,
                            CityName = "São Paulo",
                            CountryId = 1
                        },
                        new
                        {
                            Id = 3,
                            CityName = "Nova York",
                            CountryId = 2
                        },
                        new
                        {
                            Id = 4,
                            CityName = "Paris",
                            CountryId = 3
                        },
                        new
                        {
                            Id = 5,
                            CityName = "Roma",
                            CountryId = 4
                        },
                        new
                        {
                            Id = 6,
                            CityName = "Tóquio",
                            CountryId = 5
                        });
                });

            modelBuilder.Entity("CityBreaks.Models.Country", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("CountryCode")
                        .IsRequired()
                        .HasMaxLength(2)
                        .HasColumnType("TEXT")
                        .HasColumnName("Country_Code");

                    b.Property<string>("CountryName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT")
                        .HasColumnName("Country_Name");

                    b.HasKey("Id");

                    b.ToTable("Countries");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CountryCode = "BR",
                            CountryName = "Brasil"
                        },
                        new
                        {
                            Id = 2,
                            CountryCode = "US",
                            CountryName = "Estados Unidos"
                        },
                        new
                        {
                            Id = 3,
                            CountryCode = "FR",
                            CountryName = "França"
                        },
                        new
                        {
                            Id = 4,
                            CountryCode = "IT",
                            CountryName = "Itália"
                        },
                        new
                        {
                            Id = 5,
                            CountryCode = "JP",
                            CountryName = "Japão"
                        });
                });

            modelBuilder.Entity("CityBreaks.Models.Property", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CityId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT")
                        .HasColumnName("Property_Name");

                    b.Property<decimal>("PricePerNight")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.ToTable("Properties");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CityId = 1,
                            Name = "Copacabana Palace",
                            PricePerNight = 800.00m
                        },
                        new
                        {
                            Id = 2,
                            CityId = 1,
                            Name = "Ipanema Beach House",
                            PricePerNight = 650.00m
                        },
                        new
                        {
                            Id = 3,
                            CityId = 3,
                            Name = "Times Square Luxury Apartment",
                            PricePerNight = 1200.00m
                        });
                });

            modelBuilder.Entity("CityBreaks.Models.City", b =>
                {
                    b.HasOne("CityBreaks.Models.Country", "Country")
                        .WithMany("Cities")
                        .HasForeignKey("CountryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Country");
                });

            modelBuilder.Entity("CityBreaks.Models.Property", b =>
                {
                    b.HasOne("CityBreaks.Models.City", "City")
                        .WithMany("Properties")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("City");
                });

            modelBuilder.Entity("CityBreaks.Models.City", b =>
                {
                    b.Navigation("Properties");
                });

            modelBuilder.Entity("CityBreaks.Models.Country", b =>
                {
                    b.Navigation("Cities");
                });
#pragma warning restore 612, 618
        }
    }
}
