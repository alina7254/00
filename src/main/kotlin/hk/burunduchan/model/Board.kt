package hk.burunduchan.model

import jakarta.persistence.*

@Entity
@Table(name = "boards")
data class Board(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: String,

    @Column(name = "name", nullable = false, unique = true)
    val name: String
)

