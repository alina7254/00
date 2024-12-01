package hk.burunduchan.model

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "threads")
data class Thread(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,

    @Column(name = "title", nullable = false)
    val title: String,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_name", nullable = false)
    val board: Board,

    @Column(name = "blob")
    val blob: String? = null,

    @Column(name = "timestamp", nullable = false)
    val timestamp: LocalDateTime = LocalDateTime.now()
)
