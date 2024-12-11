package hk.burunduchan.model

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "boards")
data class Board(
    @Id
    @Column(name = "id", nullable = false, unique = true)
    val id: String,

    @Column(name = "name", nullable = false)
    val name: String
)

