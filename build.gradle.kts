import org.jetbrains.kotlin.gradle.tasks.KotlinJvmCompile

plugins {
    kotlin("jvm") version "1.9.10"
    kotlin("plugin.spring") version "1.9.10"
    kotlin("plugin.allopen") version "1.9.10"
    kotlin("plugin.noarg") version "1.9.10"
    id("org.springframework.boot") version "3.1.4"
    id("io.spring.dependency-management") version "1.1.3"
    id("org.flywaydb.flyway") version "9.22.0"
}

group = "hk.burunduchan"
version = "0.0.1-SNAPSHOT"

repositories {
    mavenCentral()
}


dependencies {
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")


    implementation("org.springframework.boot:spring-boot-starter")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")

    implementation("io.r2dbc:r2dbc-spi")

    implementation("org.postgresql:postgresql:42.7.4")

    implementation("org.flywaydb:flyway-core:9.22.0")

    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.withType<Test> {
    useJUnitPlatform()
}

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(20)
    }
}


tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions {
        jvmTarget = "20"
    }
}

flyway {
    url = "jdbc:postgresql://localhost:5432/burunduchan"
    user = "burunduchan"
    password = "P@ssw0rd2024!"
}

sourceSets {
    main {
        java {
            srcDirs("src/main/kotlin")
        }
    }
}


